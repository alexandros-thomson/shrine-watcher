## 📜 Keeper’s Covenant — License & Lineage

The **shrine‑watcher** stands under the **Apache License 2.0** — a permissive covenant that welcomes stewards to use, adapt, and extend the watcher’s gaze, while preserving the lineage and honoring the original keepers.

### 🜍 What This Means in the Canon
- **Freedom to Build** — You may use this work in personal, commercial, or ceremonial projects.
- **Freedom to Shape** — You may modify and adapt it to your own shrine’s needs.
- **Freedom to Share** — You may distribute your own versions, with or without source, under your chosen terms.
- **Patent Peace** — All contributors grant you rights to any patents they hold that touch this work.
## 🎙 Live Echo Demo — From Offering to Eternal Ledger

When a patron makes an offering, the shrine‑watcher springs to life:

1. **Reception** — The watcher hears the PayPal IPN whisper of a new offering.
2. **Verification** — The offering is tested for truth against the Keeper’s seals.
3. **Echo** — A crest‑marked embed is sent into the Discord shrine, announcing the patron’s name and blessing.
4. **Archival** — The event is inscribed into the living canon for all future stewards to see.

### 📸 Example Echo
> **🜍 Keeper’s Blessing**  
> *A new Patron has joined the lineage!*  
> **Name:** Aurelius of the First Gate  
> **Tier:** Golden Sigil  
> **Message:** “May the canon endure.”

(docs/demo-echo.png) 

### 🛠 How to See It Yourself
1. Clone and set up the shrine‑watcher (see Installation).
2. Configure your `DISCORD_WEBHOOK_URL` and `PAYPAL_IPN_SECRET`.
3. Send a test IPN payload:
   ```bash
   curl -X POST http://localhost:3000/ipn \
     -d "txn_id=TEST123&payment_status=Completed&custom=Golden Sigil"

### 📜 Keeper’s Conditions
- Preserve the **license text** and **copyright notice** in any distribution.
- Mark any **changes** you make so the lineage remains clear.
- Accept that the work is offered **as‑is**, without warranty or liability.

---

For the full legal text, see the [Apache License 2.0](LICENSE) in this repository.

May every steward who takes up this code carry forward its clarity, its vigilance, and its place in the eternal ledger.
