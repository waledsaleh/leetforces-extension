const $ = (id) => document.getElementById(id);
const msg = (t) => ($('msg').textContent = t);

const ORIGINS = { origins: ['https://leetcode.com/*', 'https://zerotrac.github.io/*'] };
chrome.permissions.contains(ORIGINS, (ok) => {
  if (!ok) $('perm').style.display = 'block';
});
$('grant').addEventListener('click', () => {
  chrome.permissions.request(ORIGINS, (granted) => {
    if (granted) {
      $('perm').style.display = 'none';
      msg('Access granted — reload your LeetCode tab.');
    } else {
      msg('Access was not granted.');
    }
  });
});

chrome.storage.sync.get(['auto', 'button'], (s) => {
  $('auto').checked = !!s.auto;
  $('button').checked = s.button !== false;
});
$('auto').addEventListener('change', (e) => chrome.storage.sync.set({ auto: e.target.checked }));
$('button').addEventListener('change', (e) => chrome.storage.sync.set({ button: e.target.checked }));

$('toggle').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    if (!tab || !/^https:\/\/leetcode\.com\//.test(tab.url || '')) return msg('Open a leetcode.com page first.');
    chrome.tabs.sendMessage(tab.id, { type: 'lccf:toggle' }, () => {
      if (chrome.runtime.lastError) msg('Reload the LeetCode tab once, then try again.');
      else window.close();
    });
  });
});

$('refresh').addEventListener('click', () => {
  msg('Downloading…');
  chrome.runtime.sendMessage({ type: 'lccf:ratings', force: true }, (r) => {
    msg(r ? `Loaded ${Object.keys(r).length} rated problems.` : 'Could not download ratings.');
  });
});
