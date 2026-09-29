"""Regression check: adding the module must not strip the original homepage."""
from pathlib import Path
from urllib.request import urlopen
import re
import sys

root = Path(__file__).resolve().parent
original = (root / 'source/homepage.html').read_text()
candidate = Path(sys.argv[1]).read_text() if len(sys.argv) > 1 else urlopen('http://127.0.0.1:4318/home/').read().decode()
scripts = lambda html: re.findall(r'<script\b[^>]*>.*?</script>', html, re.S)
assert all(script in scripts(candidate) for script in scripts(original)), 'Original homepage scripts were removed or changed'
restored = candidate.replace('<link rel="stylesheet" href="/home/privacy-section.css">', '')
restored = restored.replace('<script src="/home/preview.js" defer></script>', '')
assert restored == original, 'Original homepage markup, styles or asset paths were modified'
print('PASS: original homepage markup, scripts, styles and resource paths preserved exactly')
