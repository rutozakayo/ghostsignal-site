/* =============================================================
   GHOSTSIGNAL — SITE CONTENT  (edit me)
   -------------------------------------------------------------
   This is the ONLY file you need to touch to change your site.
   Everything below is plain text between "quotes". Keep the
   commas and the quote marks exactly where they are.
   ============================================================= */

window.SITE = {

  /* ---- WHO YOU ARE ---------------------------------------- */
  brand: "Ghostsignal",        // full name, used in the footer line
  brandFirst: "Ghost",         // first half of the logo wordmark
  brandLast: "signal",         // second half (shown in green)

  /* ---- CONTACT --------------------------------------------
     phone    : shown on every call button (digits only is fine)
     whatsapp : country code + number, NO plus sign, NO spaces
                e.g. Kenya 0712... becomes "254712..."
                leave "" to hide WhatsApp buttons
     email    : leave "" to hide email buttons                */
  contact: {
    phone: "0712088589",
    whatsapp: "254712088589",
    email: "ghostsignal.inc@gmail.com",
    hours: "Message or email anytime — same-day reply while we're mid-build.",
    title: "Tell us what you want built.",
    lead: "An app, a site, a game, a bot — or a bug that's been annoying you for months. One message is usually enough to know if we're a fit, and to give you a rough number."
  },

  /* ---- START A PROJECT ------------------------------------
     The panel people use to message you. capabilities and
     timelines show up as clickable options, so a customer
     picks one, types their idea, and sends it as a text.  */
  start: {
    title: "Tell me what you want built.",
    lead: "Pick what you need, describe it in your own words, and send it straight to me as a text. You see the exact message before it goes — nothing disappears into a form.",
    formTitle: "Your project, in your words",
    formNote: "Nothing is stored on this site. Your message is sent as a text you can read first.",
    capabilities: [
      { key: "app",  title: "Apps",         text: "Booking, delivery, membership or an internal tool — iOS and Android." },
      { key: "web",  title: "Websites",     text: "Company site, landing page, or a shop that takes payments." },
      { key: "game", title: "Games",        text: "2D browser games, interactive experiences and playable prototypes." },
      { key: "bot",  title: "Bots",         text: "WhatsApp bots, chat support and task automation." },
      { key: "bug",  title: "Bug fixes",    text: "Something broken, slow or abandoned that needs rescuing." },
      { key: "other", title: "Something else", text: "Tell me the idea — I'll tell you honestly if I can build it." }
    ],
    timelines: ["ASAP", "2–4 weeks", "1–3 months", "Just exploring"]
  },

  /* ---- SHOP INTRO ----------------------------------------- */
  shop: {
    title: "Buy it instead of just reading about it.",
    lead: "Fixed-scope products you can order right now. Pick one, order it, and we confirm price, timeline and delivery with you directly — no forms that go nowhere."
  },

  /* ---- HERO (top of page) --------------------------------- */
  hero: {
    eyebrow: "Apps · Websites · Games · Bots",
    titleTop: "We build the software that",
    titleAccent: "runs your business",
    lead: "Ghostsignal designs and ships apps, websites, games and automation bots — plus the unglamorous part most teams skip: finding the bugs and killing them before your customers do.",
    chips: ["Mobile & web apps", "Game builds", "Automation bots", "Bug hunting & QA"]
  },

  /* ---- SERVICES -------------------------------------------
     Add a service by copying one {...} block and putting a
     comma after the previous one. icon must be one of:
     app | web | game | bot | bug | bolt                    */
  services: [
    {
      icon: "app",
      title: "Apps",
      text: "Products people actually keep on their phone — and internal tools your team stops complaining about.",
      points: ["iOS & Android, or cross-platform builds", "Dashboards, booking, membership, payments", "App Store / Play submission handled"]
    },
    {
      icon: "web",
      title: "Websites",
      text: "Fast, clean, mobile-first sites that look like they cost more than they did — and load before people leave.",
      points: ["Company sites, portfolios, landing pages", "Online stores with payment & shipping", "Speed, mobile and SEO fundamentals included"]
    },
    {
      icon: "game",
      title: "Games",
      text: "Playable builds, not slide decks. Browser games, prototypes and small releases that run on real hardware.",
      points: ["2D web games and interactive experiences", "Prototypes to test an idea before you fund it", "Gameplay systems, scoring, leaderboards"]
    },
    {
      icon: "bot",
      title: "Bots",
      text: "Software that works while you sleep — answering customers, moving data, chasing the boring tasks.",
      points: ["Chat & support bots for your channels", "Task automation and app-to-app integrations", "Data collection, alerts and scheduled jobs"]
    },
    {
      icon: "bug",
      title: "Bug hunting & fixes",
      text: "Something broken, slow or quietly losing you money? We find the cause instead of guessing at symptoms.",
      points: ["Code and performance audits", "Crash, checkout and payment-issue debugging", "Rescue work on abandoned or outsourced builds"]
    }
  ],

  /* ---- SELECTED WORK --------------------------------------
     links: {label, url} — first one is highlighted in green. */
  work: [
    {
      title: "NGANYA HIRE",
      role: "Booking platform",
      desc: "A production booking platform for hiring customised Kenyan matatus. Split into three separate apps — customer, driver and owner/admin — sharing one database, with real-time availability conflict checks, role-based auth and PWA install support.",
      tags: ["Next.js 15", "TypeScript", "Tailwind v4", "Drizzle + Neon", "Auth.js", "PWA"],
      shot: "nganya",
      live: "Live",
      links: [
        { label: "Live site", url: "https://nganya-hire.vercel.app" },
        { label: "Code", url: "https://github.com/rutozakayo/Nganya-hire" },
        { label: "Customer app", url: "https://nganya-passenger.vercel.app" }
      ]
    },
    {
      title: "Rex the Dog",
      role: "WhatsApp bot",
      desc: "A Node.js WhatsApp bot built on the Baileys library, with a plugin architecture so commands can be dropped in without touching the core. Sessions, media handling and per-command settings live in their own layers.",
      tags: ["Node.js", "Baileys", "Plugin system", "MIT licensed"],
      shot: "rex",
      live: "Running",
      links: [
        { label: "Code", url: "https://github.com/rutozakayo/rex-the-dog" }
      ]
    }
  ],

  /* ---- SHOP -----------------------------------------------
     To turn a card into a real paid product you need TWO things:
       1. price  — the number people see, e.g. "KSh 25,000"
       2. url    — your payment link (Stripe / Gumroad / PayPal /
                   M-Pesa request link). Paste it in "url".
     If "url" is empty the button becomes an ORDER button that
     opens a call / message instead — so nothing is ever a dead
     button. Delivery is agreed after the order.              */
  products: [
    {
      name: "Website build",
      badge: "Most popular",
      price: "Price on request",
      url: "",
      desc: "A complete mobile-first website — pages, contact flow, analytics and a handover walkthrough so you can update it yourself.",
      features: ["Up to 5 pages, your copy or ours", "Domain, hosting and email set up", "Speed and mobile pass before launch"],
      featured: true
    },
    {
      name: "WhatsApp bot setup",
      badge: "Fast delivery",
      price: "Price on request",
      url: "",
      desc: "A configured WhatsApp bot wired to your own number, with the commands you actually need and a guide to add more.",
      features: ["Menu, replies and auto-responses", "Commands built around your workflow", "Runs on your own server or ours"],
      featured: false
    },
    {
      name: "App MVP",
      badge: "",
      price: "Price on request",
      url: "",
      desc: "One core idea, built properly and shipped to a store or a test group. The cheapest way to find out if people want it.",
      features: ["Cross-platform iOS + Android", "Accounts, data and payments", "Store submission handled"],
      featured: false
    },
    {
      name: "Bug fix package",
      badge: "48h target",
      price: "Price on request",
      url: "",
      desc: "Send me the thing that's broken. I reproduce it, fix the cause, and tell you plainly what went wrong.",
      features: ["Reproduce → diagnose → fix", "Written summary of the cause", "One follow-up fix included"],
      featured: false
    },
    {
      name: "Game build",
      badge: "",
      price: "Price on request",
      url: "",
      desc: "A playable 2D game or interactive experience that runs in the browser and on mobile — scoped to something finishable.",
      features: ["Playable in-browser build", "Scoring, levels, sound", "Playable link to share anywhere"],
      featured: false
    }
  ],

  /* ---- HIRE ME / FREELANCE -------------------------------- */
  hire: {
    title: "Need to hire one person to build the thing?",
    lead: "I take on freelance builds directly — apps, websites, games, bots, and the bug hunts nobody else wants to touch. You talk to the person writing the code, not an account manager.",
    jobs: [
      { title: "Apps", text: "Mobile apps and internal tools, from first screen to store release." },
      { title: "Websites & shops", text: "Company sites, landing pages and stores that actually convert." },
      { title: "Games", text: "Browser games, gameplay prototypes and small playable releases." },
      { title: "Bots & automation", text: "WhatsApp and chat bots, integrations, scheduled jobs, scrapers." },
      { title: "Bug fixing", text: "Rescue work on broken or abandoned builds — diagnosis, not guesswork." },
      { title: "Consulting", text: "Scope review, stack choice, or a second opinion before you spend." }
    ],
    cta: "Available for new projects"
  },

  /* ---- FOOTER --------------------------------------------- */
  footerNote: "Apps, websites, games, bots & bug fixes."
};
