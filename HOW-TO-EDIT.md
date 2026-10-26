# Ghostsignal site — how to run and edit it

Three files, no build step, no dependencies:

| File | What it is |
|---|---|
| `index.html` | The page: layout, colours, all the behaviour |
| `content.js` | **Your words.** Every editable text and every product lives here |
| `HOW-TO-EDIT.md` | This file |

Open `index.html` in a browser and it works. Upload both files to any host and it's live.

---

## 1. Edit text in the browser (fastest)

1. Open the site.
2. Click **Edit text** (bottom-right) — or open `index.html?edit=1`.
3. Click any text with a dashed outline and type over it.
4. Click **Save changes** — your edits stay in that browser.
5. Click **Download content.js** and replace the `content.js` on your host with the downloaded one.

**Why the download step?** The site is plain files with no database, so browser edits live in your browser only. The download makes them permanent for everyone.

Editing carefully: browser edits override `content.js` in *that* browser. If you later edit `content.js` by hand, press **Undo all my edits** first so old overrides don't hide the new text.

---

## 2. Edit `content.js` (permanent, works anywhere)

Open it in any text editor. Rules:

- Only change text **between the quote marks** `"like this"`.
- Keep every `,` and `"` where it is.
- Don't delete brackets or commas — the file is read as code.

Example — change the hero headline:

```js
hero: {
  titleTop: "We build the software that",
  titleAccent: "runs your business",
```

---

## 3. The "Start a project" panel (how customers reach you)

The hero button, header button and contact button all jump to `#start`. There:

1. The left list shows **what you can build** — apps, websites, games, bots, bug fixes, something else. A customer taps one.
2. They pick a timeline and type their idea.
3. A live preview shows the exact message.
4. **Send as text** opens their SMS app with the message ready to send. **Copy message** copies it for anyone on a laptop.

Change the options in `content.js`:

```js
start: {
  capabilities: [
    { key: "web", title: "Websites", text: "Company site, landing page, or a shop that takes payments." },
    ...
  ],
  timelines: ["ASAP", "2–4 weeks", "1–3 months", "Just exploring"]
}
```

`key` picks the icon: `app`, `web`, `game`, `bot`, `bug`, `other`.

**Important about texting from a computer:** SMS links only open on phones. If a customer is on a laptop, their only one-tap option is WhatsApp or email — so fill in at least one of those (section 4) and the message panel will show that button too. Until then they can still copy the message and send it themselves.

---

## 4. Selling: making the buy buttons take money

Every product currently says **Price on request**, so its button opens a call (or WhatsApp/email) instead of a checkout. That means no button is ever dead — but it isn't a real card payment yet.

To take money automatically:

1. Create a payment link for that product:
   - **Stripe Payment Links** — cards, works worldwide
   - **Gumroad / Lemon Squeezy** — handles tax and digital delivery
   - **PayPal.Me** — quickest to set up
2. In `content.js`, set two fields on that product:

```js
{
  name: "Website build",
  badge: "Most popular",
  price: "KSh 25,000",                       // <- what people see
  url: "https://buy.stripe.com/xxxxxxxx",     // <- your payment link
  ...
}
```

The button turns into **Buy now** on its own. Leave `url` empty and it goes back to the order-by-call button. Add more products by copying a whole `{ ... }` block and putting a comma after the previous one.

---

## 5. WhatsApp (optional) and email

Phone, email and WhatsApp are all set. Change them here if any change:

```js
contact: {
  phone: "0712088589",
  whatsapp: "254712088589",   // already set — country code, no + or spaces
  email: "ghostsignal.inc@gmail.com"
}
```

Anything you fill in shows up automatically in the contact card, in the project panel, and on product order buttons. WhatsApp is now the primary action everywhere, because a `wa.me` link works on phones *and* laptops — it is not blocked the way `tel:` links are.

**No `tel:` links exist on the site any more.** Tapping "call" in some in-app viewers fails with `net::ERR_UNKNOWN_URL_SCHEME`, so the phone number is a **copy** button instead: tap it and the number is on your clipboard. That works in every browser.

---

## 6. Publishing

Any of these host two static files for free:

- **Netlify Drop** — drag the folder onto app.netlify.com/drop. Live in ~30 seconds.
- **Cloudflare Pages** — connect a GitHub repo, or upload directly.
- **GitHub Pages** — push both files to a repo, enable Pages in Settings.

Point your domain at the host once it's up. Keep `index.html` and `content.js` in the **same folder** — if `content.js` is missing the page still loads, but with the text baked into the HTML and no product cards.

---

## 7. Things that are still placeholders

- **Prices** — all say "Price on request". Set real numbers before sharing widely.
- **Payment links** — empty, so buttons order by call.
- **Project images** — the NGANYA HIRE and Rex cards use drawn diagrams, not screenshots. Real screenshots will sell the work harder.
- **Contact details** — phone, WhatsApp and email are all live. Nothing left to fill in there.
- **Testimonials / client logos** — none are invented. Add real ones only.
