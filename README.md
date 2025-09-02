<div align="center">

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                         🜍  KYPRIA  🜍                        ┃
┃                 Shrine of the Watcher of Echoes               ┃
┃     Listening for Sponsorship Ripples Across the Realms       ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

</div>

---

## 👁 The Watcher’s Vigil
Perched at the edge of the Basilica Gate,  
the Watcher listens for the faintest tremor —  
a pledge clearing, a sigil claimed,  
an echo rolling through the Discord halls.  

It does not speak unless the canon stirs.  
When it does, the message is swift, precise, and lineage‑bound.

---

## 🎯 Purpose in the Canon
- **Sponsorship Sentinel** — verifies IPNs and confirms offerings.  
- **Artifact Herald** — triggers badge drops and ceremonial embeds.  
- **Discord Bridge** — delivers sponsor echoes into shrine channels.  
- **Audit Anchor** — ensures every event is logged in the lineage.

---

## 🖼 Shrine Iconography
<p align="center">
  <img src="public/shrine-watcher-echo-guardian-v1.jpg" alt="Shrine Watcher — Echo Guardian" width="85%">
</p>

> *Eyes unblinking, ears attuned —  
> the Watcher hears the canon breathe.*

---

## 📜 Relics of the Watcher
| Relic No. | Name / Event | Tier | Date | Notes |
|-----------|--------------|------|------|-------|
| 001 | First Echo Captured | Ember | 2025‑08‑05 | Verified first sponsorship IPN. |
| 002 | Discord Bridge Forged | Ember | 2025‑08‑12 | Live embeds flowing into shrine channels. |
| 003 | Keeper’s Governance Enshrined | Ember | 2025‑09‑01 | Law sealed; lineage preserved. |

---

## ⚙ Operational Notes
- Built in **JavaScript** with Discord.js integration.  
- Listens for PayPal IPNs and other sponsor triggers.  
- Posts ceremonial embeds to designated shrine channels.  
- Logs all events for audit and lineage preservation.

---

## 🜍 Support the Shrine‑Watcher
This project is the Shrine’s vigilant eye — listening for offerings, verifying their truth, and echoing them into Discord’s ceremonial halls.  
Your offerings keep the Watcher awake, the echoes strong, and the canon unbroken.

### Ways to Offer
- GitHub Sponsors — Become a Patron of the Shrine  
- Patreon — Join the Inner Circle  
- Ko‑fi — One‑time Offering  

---

## 🏛 Hall of Honor
Those who support the Shrine are inscribed here in gratitude and lineage.

---

## 🎙 Live Echo Demo — From Offering to Eternal Ledger
When a patron makes an offering, the shrine‑watcher springs to life:
1. **Reception** — The Watcher hears the PayPal IPN whisper of a new offering.  
2. **Verification** — The offering is tested for truth against the Keeper’s seals.  
3. **Echo** — A crest‑marked embed is sent into the Discord shrine, announcing the patron’s name and blessing.  
4. **Archival** — The event is inscribed into the living canon for all future stewards to see.

📸 *Example Echo — see repository docs for a visual example.*

---

## 📜 Keeper’s Covenant — License & Lineage
The shrine‑watcher stands under the Apache License 2.0 — a permissive covenant that welcomes stewards to use, adapt, and extend the Watcher’s gaze, while preserving the lineage and honoring the original Keepers.

### 🜍 What This Means in the Canon
- **Freedom to Build** — Use this work in personal, commercial, or ceremonial projects.  
- **Freedom to Shape** — Modify and adapt it to your own shrine’s needs.  
- **Freedom to Share** — Distribute your own versions, with or without source, under your chosen terms.  
- **Patent Peace** — All contributors grant rights to any patents they hold that touch this work.

### 📜 Keeper’s Conditions
- Preserve the license text and copyright.  
- Mark any changes so the lineage remains clear.  
- Accept that the work is offered as‑is, without warranty or liability.

For the full legal text, see the Apache License 2.0 in this repository.

---

## ⚖ Keeper’s Governance
The watcher listens for echoes of sponsorship and ceremony.  
Its code is guarded; changes require review to ensure the echoes remain true.  
Every update is inscribed in the lineage.

📜 *Lineage is our law. Precision is our craft. Myth is our breath.*

---

## 🧪 Keeper’s Test Rituals
These invocations let you simulate sponsorship events without waiting for a real PayPal IPN.

**Option 1 — Form‑Encoded (PayPal‑Style)**  
```bash
curl -X POST http://localhost:3000/ipn \
  -d "txn_id=TEST123" \
  -d "payment_status=Completed" \
  -d "custom=Golden Sigil"
