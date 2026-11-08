# LeetForces — LeetCode in Codeforces style


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

## Install (developer mode)

**Firefox (121+):** `about:debugging#/runtime/this-firefox` → *Load Temporary Add-on* → pick `manifest.json`.

Open any LeetCode problem and click the **CF view** button (bottom-left), or tick "Open automatically" in the toolbar popup.


## Notes
- LeetCode's APIs are unofficial. If one changes, the view shows an error with a button to go back to the normal page.
- Premium problems need a Premium login, the same as on LeetCode.
- Unofficial and not affiliated with LeetCode or Codeforces.
