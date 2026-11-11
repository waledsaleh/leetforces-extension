



# LeetForces — LeetCode in Codeforces style
<p align="center"> <img src="icons/icon128.png" width="96" alt="LeetForces icon"> </p> <h1 align="center">LeetForces</h1> <p align="center"> <b>LeetCode problems, problemset and contests in a classic Codeforces-style layout.</b> </p> <p align="center"> <a href="https://addons.mozilla.org/en-US/firefox/addon/leetforces/"><img src="https://img.shields.io/amo/v/leetforces?label=Firefox%20Add-ons&logo=firefoxbrowser&logoColor=white&color=FF7139" alt="Firefox Add-ons version"></a> <a href="https://addons.mozilla.org/en-US/firefox/addon/leetforces/"><img src="https://img.shields.io/amo/users/leetforces?label=users&color=3b5998" alt="Firefox users"></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="MIT license"></a> </p> <p align="center"> <a href="https://addons.mozilla.org/en-US/firefox/addon/leetforces/"><b>➜ Install for Firefox</b></a> </p>

https://github.com/user-attachments/assets/dc7ed17f-c9c1-4549-b18e-943834994929

Demo:

https://github.com/user-attachments/assets/3403722e-5518-4e03-8fe9-83b17d86a9c6


A browser extension (Chrome / Edge / Firefox, Manifest V3) that shows LeetCode pages in a classic Codeforces layout.

## What it changes
| LeetCode page | Codeforces-style view |
|---|---|
| `/problems/<slug>/` | Centered header (`C. Title`, difficulty, **rating**, acceptance), legend, generated **Input / Output** format, **Constraints**, **Examples** as raw Input/Output boxes with *Copy* buttons, explanations moved to **Note**. Sidebar: submit button, contest box, tags (incl. `*1693`), hints as spoilers, similar problems. |
| `/problemset/` | Problem table: #, name with tags on the right, rating (CF colours), acceptance; solved rows green, attempted rows red; CF pagination; filter box (search, difficulty, tag, **rating range**). |
| `/contest/` | "Current or upcoming contests" with countdowns + "Past contests". |
| `/contest/<slug>/` | Contest dashboard: problems A–D, score, rating; contest box with timer. |
| `/contest/<slug>/ranking/` | Standings: #, Who, =, Penalty, A–D cells with `+`, `+2`, solve time. |
| `/contest/<slug>/problems/<slug>/` | Problem page with contest letter and contest tabs. |

The view is an overlay on top of LeetCode, so the LeetCode editor keeps working: click **Solve / Submit in LeetCode editor** (or press **Alt+Shift+C**) to switch back.

Problem ratings are the Elo-style ratings from [zerotrac/leetcode_problem_rating](https://github.com/zerotrac/leetcode_problem_rating). They're cached for 24 hours and only exist for contest problems.


Open any LeetCode problem and click the **CF view** button (bottom-left), or tick "Open automatically" in the toolbar popup.


## Notes
- LeetCode's APIs are unofficial. If one changes, the view shows an error with a button to go back to the normal page.
- Premium problems need a Premium login, the same as on LeetCode.
- Unofficial and not affiliated with LeetCode or Codeforces.
