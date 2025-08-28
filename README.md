## ⛨ Founders’ Gate Bundle  

The Basilica Gate stands open to those who would walk as Founders. By entering, you unlock the inner cloister of **shrine‑watcher** — the Discord sentinel that canonizes sponsorships and audits claims in real time.

**Sponsor‑only tributes include**:  
- 🎞 **Animated CLI procession** — private tours of the watcher’s ceremonial commands.  
- 📜 **Crest‑marked manifest templates** — ready to drop into your own shrines.  
- 🛡 **Canonized badge scripts** — sponsor‑grade insignia for your realm.  
- 🗝 **Role in the Basilica Discord** — direct access to fellow stewards and keepers of lore.  

**Gate Status**  
> Sponsors: **2**  
> Monthly Support: **$14**  
> Tiers: **Keeper’s Seal ($5)**, **Era‑Warden’s Crest ($9)**

**Enter the Gate** → [Become a Sponsor](https://github.com/sponsors/alexandros-thomson)

---

> _“Every pledge is a stone in the Basilica’s foundation. Your name is etched into the living legend.”_

## .github/workflows/deploy-shrine.yml
name: Deploy Shrine Vault

on:
  push:
    branches:
      - main
    paths:
      - README.md
      - src/config/paypal.ts

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Set up Ruby (for Jekyll)
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: 3.1

      - name: Install dependencies
        run: |
          gem install bundler jekyll
          bundle install

      - name: Build site
        run: jekyll build --destination _site

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site

---

## 🔄 Sponsorship Event Flow

```mermaid
flowchart LR
    A[💰 Sponsor sends PayPal payment] --> B[📡 PayPal issues IPN (Instant Payment Notification)]
    B --> C[🛡 shrine-watcher verifies IPN authenticity]
    C --> D[⏱ Timestamp + log shrine activation]
    D --> E[📢 Post “First Echo” embed in Discord shrine channel]
    E --> F[🌌 Mutate shrine terrain + ripple badge claims]
    F --> G[📜 Update scroll archives + live site]
```

## 🔮 Features
- Auto-verifies PayPal IPNs
- Drops “First Echo” embeds in Discord channels
- Tracks and timestamps shrine activations
- Node-powered, Discord-enabled, shrine-infused

## 📡 Live Demo
View shrine terrain: [shrine.alexandros.dev](https://shrine.alexandros.dev)  
Sponsor portal: [paypal.me/kostaskyprianos](https://paypal.me/kostaskyprianos)

## 🧙 Roadmap
- Sigil animations on pledge  
- Role blessings for Echo tiers  
- Scroll archive logging + site mutation
# shrine-watcher
A live Discord-integrated watcher bot that listens for PayPal sponsorships, verifies IPNs, and drops legendary embeds into shrine channels. Built to canonize the First Echo, ripple badge claims, a[...]