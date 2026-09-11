# icg-website

The ICG agency site: <https://inspiredcreativegroupinc.com>. Static HTML on GitHub Pages,
deploys on push to `main`.

## The Production Brain page is NOT here any more

**Juan's instruction, 2026-09-11: Production Brain work happens in
`Inspired-Creative-Group/productionbrain-site`, checked out at
`~/Documents/AI - Programming Projects/productionbrain-site`.**

`production-brain.html` in this repo is a **redirect stub**. Editing it changes nothing a
visitor sees. Every outreach message sent since 2026-09-10 carries that old URL, so the
stub has to keep existing, but the page itself lives at <https://theproductionbrain.ai>.

The domain has "the" in it. Juan does not own `productionbrain.ai`; that belongs to
someone else.

## Before you touch copy on this site

Load the **`website-copy-audit`** skill. Sacred lines, no em dashes, customer is the hero,
and the word count goes down or stays flat. Product marketing context is in
`.claude/product-marketing.md`.

## Branching

Cut every branch from `origin/main` after `git fetch`. Never trust the local `main` in a
shared checkout: it was the stale pre-purge lineage and briefly re-exposed purged history
(2026-09-10). `feat/memory-machine-page` and `feat/production-brain-page` are wrong-lineage
and must never be merged.

## Careful with the shared files

`style.css`, `partners.css` and `partners-animations.js` were **copied** into
productionbrain-site, not shared. A change here does not reach that site. If a change
belongs in both, make it in both, deliberately.
