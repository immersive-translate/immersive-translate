"""Local homepage preview preserving the original app and public assets."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit
from urllib.request import Request, urlopen
import hashlib
import mimetypes
import tempfile

ROOT = Path(__file__).resolve().parent.parent
HOME = ROOT / 'home'
CACHE = Path(tempfile.gettempdir()) / 'immersive-home-public-assets'
CACHE.mkdir(exist_ok=True)
ORIGIN = 'https://immersivetranslate.com'


class PreviewHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        path = urlsplit(self.path).path
        if path in ('/', '/home/', '/home/index.html', '/zh-Hans', '/zh-Hans/'):
            raw = (HOME / 'index.html').read_text()
            self.send_bytes(raw.encode(), 'text/html; charset=utf-8')
            return
        if path.startswith(('/_next/static/', '/assets/', '/imgs/', '/images/')) or path in ('/favicon.ico', '/manifest.json'):
            self.public_asset()
            return
        # Never proxy account/API requests or forward cookies/credentials.
        if path.startswith(('/api/', '/_next/')):
            self.send_error(404)
            return
        super().do_GET()

    def public_asset(self):
        key = hashlib.sha256(self.path.encode()).hexdigest()
        cached = CACHE / key
        content_type = mimetypes.guess_type(urlsplit(self.path).path)[0] or 'application/octet-stream'
        try:
            if cached.is_file():
                data = cached.read_bytes()
            else:
                request = Request(ORIGIN + self.path, headers={'User-Agent': 'Mozilla/5.0'})
                with urlopen(request, timeout=45) as response:
                    data = response.read()
                cached.write_bytes(data)
            self.send_bytes(data, content_type, cache=True)
        except Exception as error:
            self.log_error('Public asset unavailable: %s (%s)', self.path, type(error).__name__)
            self.send_error(502, 'Public asset unavailable')

    def send_bytes(self, data, content_type, cache=False):
        self.send_response(200)
        self.send_header('Content-Type', content_type)
        self.send_header('Content-Length', str(len(data)))
        self.send_header('Cache-Control', 'public, max-age=86400' if cache else 'no-store')
        self.end_headers()
        self.wfile.write(data)


if __name__ == '__main__':
    print('Homepage preview: http://127.0.0.1:4318/home/#privacy-protection', flush=True)
    ThreadingHTTPServer(('127.0.0.1', 4318), PreviewHandler).serve_forever()
