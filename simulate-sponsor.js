name: Sponsor Simulation Ritual

on:
  workflow_dispatch:

jobs:
  simulate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Shrine
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm ci

      - name: Fire Echo Signal
        env:
          IPN_LISTENER_URL: ${{ secrets.IPN_LISTENER_URL }}
          PAYPAL_MODE: ${{ secrets.PAYPAL_MODE }}
          PAYPAL_API_USER: ${{ secrets.PAYPAL_API_USER }}
          PAYPAL_API_PWD: ${{ secrets.PAYPAL_API_PWD }}
          PAYPAL_API_SIGNATURE: ${{ secrets.PAYPAL_API_SIGNATURE }}
        run: node rituals/simulate-sponsor.js

      - name: Commit Sponsor Scroll
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add sponsor-scroll.md
          git commit -m "🌠 Echo fired: scroll updated"
          git push
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
