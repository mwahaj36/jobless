# **unemployed**

---

## Lore

I spent **the entire summer** without even an *int***sh*p*.  
Meanwhile, my feed was flooded with people announcing their new *j*b*, their amazing *c***er* moves, and endless *opp***t**ities*.  
It made me sad enough to build this. Consider it part coping mechanism, part art project, part cry for help.

---

## What It Does

- Detects words like “j*b”, “int***sh*p”, “re***itment”, “oppo***t**ities”, etc.
- Replaces the middle of the word with `*` so it’s still guessable but less… triggering.
- Works on **dynamically loaded pages** (thanks, MutationObserver).
- Hover shows a tooltip with the original word (if you *must* know).

---

## How It Works

- **MutationObserver**: Watches the DOM so newly loaded posts/comments get censored too.
- **Regex list**: A curated list of c***er buzzwords from LinkedIn + job boards + my nightmares.
- **Safe DOM edits**: Splits text nodes and inserts `<span class="censored">` without breaking links/layout.

---

## Installation

1. Clone this repo (or don’t, I’m not your manager).  
2. Go to `chrome://extensions/` and enable **Developer Mode**.  
3. Click **Load Unpacked** and select this folder.  
4. Refresh LinkedIn and enjoy your new, **j*b-free** browsing experience.  

---

## Why Does This Exist?  

- Because LinkedIn is just **Facebook for succesful people.**  
---

## Attribution
<a href="https://www.flaticon.com/free-icons/unemployment" title="unemployment icons">Unemployment icons created by Freepik - Flaticon</a>

---  

**Disclaimer**: This extension won’t get you a job, but it *will* make scrolling through LinkedIn slightly less soul-crushing. Use at your own risk.  

Built with **desperation**.

**Enjoy being (digitally) Unemployed!**  