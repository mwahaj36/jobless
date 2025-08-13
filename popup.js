const toggle = document.getElementById('toggle');

chrome.storage.local.get('censorEnabled', (data) => {
  toggle.checked = data.censorEnabled !== false;
});

toggle.addEventListener('change', () => {
  chrome.storage.local.set({ censorEnabled: toggle.checked });
});
