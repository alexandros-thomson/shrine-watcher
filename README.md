🜍 Support the Shrine‑Watcher
This project is the Shrine’s vigilant eye — listening for offerings, verifying their truth, and echoing them into Discord’s ceremonial halls.
Your offerings keep the watcher awake, the echoes strong, and the canon unbroken.

Ways to Offer
• 	GitHub Sponsors — Become a Patron of the Shrine
• 	Patreon — Join the Inner Circle
• 	Ko‑fi — One‑time Offering
Hall of Honor
Those who support the Shrine are inscribed here in gratitude and lineage.
🎙 Live Echo Demo — From Offering to Eternal Ledger
When a patron makes an offering, the shrine‑watcher springs to life:
1. 	Reception — The watcher hears the PayPal IPN whisper of a new offering.
2. 	Verification — The offering is tested for truth against the Keeper’s seals.
3. 	Echo — A crest‑marked embed is sent into the Discord shrine, announcing the patron’s name and blessing.
4. 	Archival — The event is inscribed into the living canon for all future stewards to see.
📸 Example Echo
(See  for a visual example.)
🛠 How to See It Yourself
Option 1 — Form‑Encoded (PayPal‑Style)
curl -X POST http://localhost:3000/ipn \
  -d "txn_id=TEST123" \
  -d "payment_status=Completed" \
  -d "custom=Golden Sigil"
Option 2 — JSON (Local Testing & Scripts)
curl -X POST http://localhost:3000/ipn \
  -H "Content-Type: application/json" \
  -d '{"txn_id":"TEST123","payment_status":"Completed","custom":"Golden Sigil"}'
Option 3 — Full Mock Payload
curl -X POST http://localhost:3000/ipn \
  -H "Content-Type: application/json" \
  --data @docs/sample-ipn.json
💡 Form‑encoded matches PayPal’s real IPNs. JSON is ideal for local dev and automated scripts.
📜 Keeper’s Covenant — License & Lineage
The shrine‑watcher stands under the Apache License 2.0 — a permissive covenant that welcomes stewards to use, adapt, and extend the watcher’s gaze, while preserving the lineage and honoring the original keepers.
🜍 What This Means in the Canon
• 	Freedom to Build — Use this work in personal, commercial, or ceremonial projects.
• 	Freedom to Shape — Modify and adapt it to your own shrine’s needs.
• 	Freedom to Share — Distribute your own versions, with or without source, under your chosen terms.
• 	Patent Peace — All contributors grant rights to any patents they hold that touch this work.
📜 Keeper’s Conditions
• 	Preserve the license text and copyright
• 	Mark any changes so the lineage remains clear
• 	Accept that the work is offered as‑is, without warranty or liability
For the full legal text, see the Apache License 2.0 in this repository.
May every steward who takes up this code carry forward its clarity, its vigilance, and its place in the eternal ledger.
---

## ⚖ Keeper’s Governance
The watcher listens for echoes of sponsorship and ceremony.  
Its code is guarded; changes require review to ensure the echoes remain true.  
Every update is inscribed in the lineage.

📜 *Lineage is our law. Precision is our craft. Myth is our breath.*
