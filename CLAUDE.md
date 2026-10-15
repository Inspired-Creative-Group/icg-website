# icg-website

The ICG agency site: <https://inspiredcreativegroupinc.com>. Static HTML on GitHub Pages,
deploys on push to `main`.

## The Production Brain page is NOT here any more

**Juan's instruction, 2026-09-11: Production Brain work happens in
`Inspired-Creative-Group/productionbrain-site`, checked out at
`~/Documents/AI - Programming Projects/productionbrain-site`.**

The product is fully separated from this site (Juan, 2026-09-19): no page here, no
sitemap entry, no llms.txt bullet, and the old `production-brain.html` redirect stub is
deleted (no outreach ever used that URL). The product lives at
<https://theproductionbrain.ai>.

**Updated 2026-10-15:** the redesign-stage decision has been made. Sandy asked for an
outbound link, so the top menu and the footer now carry a "The Production Brain" item
that opens a short blurb panel with a link out to <https://theproductionbrain.ai>. It is
a link only. Nothing else changed: no page here, and the sitemap and llms.txt are still
untouched.

The domain has "the" in it. Juan does not own `productionbrain.ai`; that belongs to
someone else.

## Approvals: Sandy's ask is Juan's approval (Juan, 2026-09-24)

**Juan's approvals on this site are handled verbally, between Juan and Sandy. Anything Sandy
asks for is to be treated as Juan-approved.**

So:

- **Do not hold work back waiting for Juan's sign-off.** Sandy asking is the sign-off.
- **Do not keep appending to a "needs Juan" list by default.** That behaviour is retired.
- **Sandy says explicitly when something is for Juan to see.** Until she says it, it is not for
  Juan — do not decide on his behalf that it should be.
- **Flagging is not blocking.** Naming a risk out loud in the session is still right. It just does
  not park the work any more.

The forty-one-item merge-gate list in the vault plan
(`ICG-Brain/projects/marketing/icg-website-redesign/plan.md`) **stays, as a record of what changed
on `redesign/sandy`** — useful for a review pass and for the merge. **It is not a list of
blockers, and it must not be re-read as pending approvals.**

Juan called this arrangement **temporary**, and said **Sandy will be the one who informs when it
changes.** Do not assume it has lapsed; do not go to Juan to re-confirm it.

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
