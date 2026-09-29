// Insert only the privacy module after the original homepage has hydrated.
(async () => {
  if (document.readyState !== 'complete') {
    await new Promise(resolve => window.addEventListener('load', resolve, {once: true}));
  }
  await new Promise(resolve => setTimeout(resolve, 600));
  // Routes outside this homepage stay on the real website. Keep native
  // navigation from turning them into missing routes on the preview server.
  document.addEventListener('click', event => {
    const anchor = event.target.closest('a[href]');
    const href = anchor?.getAttribute('href');
    if (!href?.startsWith('/') || href.startsWith('//')) return;
    anchor.href = new URL(href, 'https://immersivetranslate.com').href;
    event.stopImmediatePropagation();
  }, true);
  const response = await fetch('/home/privacy-section.html');
  if (!response.ok) throw new Error('Unable to load the privacy section');
  const template = document.createElement('template');
  template.innerHTML = await response.text();
  const section = template.content.firstElementChild;
  for (const image of section.querySelectorAll('img')) {
    image.src = new URL(image.getAttribute('src'), `${location.origin}/home/`).href;
  }
  const insert = () => {
    if (document.getElementById('privacy-protection')) return;
    const heading = [...document.querySelectorAll('h2')].find(node => node.textContent.includes('口碑之选'));
    const testimonials = heading?.closest('section');
    if (!testimonials) return;
    testimonials.before(section);
    if (location.hash === '#privacy-protection') section.scrollIntoView();
  };
  insert();
  new MutationObserver(insert).observe(document.body, {childList: true, subtree: true});
})();
