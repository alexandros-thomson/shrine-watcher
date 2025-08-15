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
          publish_dir: ./_site 🔮 Features
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
- Scroll archive logging + site mutation# shrine-watcher
A live Discord-integrated watcher bot that listens for PayPal sponsorships, verifies IPNs, and drops legendary embeds into shrine channels. Built to canonize the First Echo, ripple badge claims, and mutate shrine terrain in real time. Node-powered, mythically deployed, audit-safe.
birth:
  date: "YYYY-MM-DD"        # e.g. "2025-08-20"
  time: "HH:MM"             # 24-hour, local to America/New_York
  timezone: "America/New_York"