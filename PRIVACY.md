# LeetForces Privacy Policy

Last updated: 8 November 2026

LeetForces is a browser extension that shows LeetCode pages in a Codeforces-style layout. It does not collect, sell or share any personal data, and it has no analytics or tracking.

## What the extension stores
All of this stays in your own browser:
- **Your settings**, such as "Open Codeforces view automatically" and "Show the floating CF view button". These are saved with the browser's extension storage. If you use browser sync, your browser may sync these two settings across your own devices.
- **A cached copy of public problem ratings**, refreshed every 24 hours.
- **Whether the Codeforces view is on in the current tab.** This is cleared when you close the tab.

## Network requests the extension makes
- **leetcode.com**: to read the problem, problemset and contest data it displays. These requests use your existing LeetCode login in the browser, the same way the LeetCode website does. The extension only reads data and never changes anything in your account.
- **zerotrac.github.io**: to download the public problem-rating file from the open-source project [zerotrac/leetcode_problem_rating](https://github.com/zerotrac/leetcode_problem_rating). No personal information is sent.

The extension sends no data to its developer or to any other server.

## Permissions
- `storage`: to save your settings and the cached ratings.
- Access to `leetcode.com`: to read and restyle LeetCode pages.
- Access to `zerotrac.github.io`: to download the public ratings.

## Removing your data
Uninstalling the extension deletes everything it stored.

## Contact
Questions or problems: open an issue at https://github.com/waledsaleh/leetforces-extension/issues

LeetForces is an unofficial project and is not affiliated with LeetCode or Codeforces.
