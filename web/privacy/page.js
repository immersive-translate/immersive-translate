// Standalone equivalents for the existing site's tabs and menu disclosures.
// No analytics, account requests, or production Next.js hydration are loaded.
const tabs = [...document.querySelectorAll('#measures [role="tab"]')];
function selectTab(tab) {
  for (const candidate of tabs) {
    const active = candidate === tab;
    candidate.setAttribute('aria-selected', String(active));
    candidate.tabIndex = active ? 0 : -1;
    document.getElementById(candidate.getAttribute('aria-controls')).hidden = !active;
  }
}
for (const tab of tabs) {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    const current = tabs.indexOf(tab);
    let next;
    if (event.key === 'ArrowRight') next = tabs[(current + 1) % tabs.length];
    if (event.key === 'ArrowLeft') next = tabs[(current + tabs.length - 1) % tabs.length];
    if (event.key === 'Home') next = tabs[0];
    if (event.key === 'End') next = tabs[tabs.length - 1];
    if (!next) return;
    event.preventDefault();
    selectTab(next);
    next.focus();
  });
}

const disclosures = [];
for (const trigger of document.querySelectorAll('header [role="button"], header button')) {
  const parent = trigger.parentElement;
  const panel = parent.querySelector('.imt-shell-header__panel, .imt-shell-header__locale-menu');
  if (!panel) continue;
  const disclosure = {trigger, parent, panel};
  disclosures.push(disclosure);
  panel.id ||= `navigation-panel-${disclosures.length}`;
  trigger.setAttribute('aria-controls', panel.id);
  trigger.setAttribute('aria-expanded', 'false');
  const toggle = () => {
    const open = trigger.getAttribute('aria-expanded') !== 'true';
    closeMenus();
    if (open) {
      parent.dataset.open = 'true';
      trigger.setAttribute('aria-expanded', 'true');
    }
  };
  trigger.addEventListener('click', toggle);
  if (trigger.tagName !== 'BUTTON') trigger.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
    }
  });
}
function closeMenus() {
  for (const {trigger, parent, panel} of disclosures) {
    delete parent.dataset.open;
    trigger.setAttribute('aria-expanded', 'false');
  }
}
document.addEventListener('click', event => {
  if (!disclosures.some(({parent}) => parent.contains(event.target))) closeMenus();
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  const open = disclosures.find(({trigger}) => trigger.getAttribute('aria-expanded') === 'true');
  closeMenus();
  open?.trigger.focus();
});

const mobileTrigger = document.querySelector('.imt-shell-header__toggle');
const mobileNavigation = document.getElementById('mobile-navigation');
mobileTrigger.setAttribute('aria-controls', 'mobile-navigation');
mobileTrigger.setAttribute('aria-expanded', 'false');
function openMobileNavigation() {
  mobileNavigation.showModal();
  mobileTrigger.setAttribute('aria-expanded', 'true');
}
mobileTrigger.addEventListener('click', openMobileNavigation);
mobileTrigger.addEventListener('keydown', event => {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  event.preventDefault();
  openMobileNavigation();
});
mobileNavigation.querySelector('[data-close-navigation]').addEventListener('click', () => mobileNavigation.close());
mobileNavigation.addEventListener('close', () => {
  mobileTrigger.setAttribute('aria-expanded', 'false');
  mobileTrigger.focus();
});
