const toggle = document.getElementById('toggle');

// Load saved state
chrome.storage.local.get('censorEnabled', (data) => {
  toggle.checked = data.censorEnabled !== false;
});

// Save state when toggled
toggle.addEventListener('change', () => {
  chrome.storage.local.set({ censorEnabled: toggle.checked });
});
