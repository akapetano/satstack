# Satstack

**Satstack** is a local-first, Bitcoin-only portfolio tracker.

It helps you understand how well you’re stacking sats by parsing your exchange
purchase history and calculating your true average buy price — without
centralizing or custodizing your data.

No accounts. No dashboards in the cloud. Your data stays on your machine.

---

## Why Satstack?

Most portfolio trackers are:

- crypto-first instead of Bitcoin-first
- cloud-based and custodial
- noisy, complex, and opinionated about “investing”

Satstack is built around a simpler idea:

> **If you stack sats, you should know your real cost basis — privately.**

---

## Core Principles

- **Bitcoin-only**\
  No altcoins, no token lists, no distractions.

- **Local-first**\
  Email parsing, data storage, and calculations run on your machine.

- **No custody**\
  Satstack never touches your keys, funds, or accounts.

- **Minimal trust**\
  You don’t need to trust a backend with your financial data.

---

## What Satstack Does (v1)

- Parse Bitcoin purchase receipts from exchanges (starting with Coinbase)
- Extract:
  - purchase date
  - BTC / sats amount
  - total fiat paid
- Calculate:
  - total sats stacked
  - total fiat invested
  - average buy price
- Display everything in a clean local UI

---

## Architecture

Satstack is a monorepo with a strict separation of concerns:

- /frontend → Next.js UI (TypeScript, Chakra UI)
- /backend → Local Go backend (email parsing, storage, logic)

### Frontend

- Next.js
- TypeScript
- Chakra UI
- Biome (linting & formatting)
- Designed to be deployable (Vercel) or bundled later into a desktop app

### Backend

- Go
- Local SQLite storage
- Google Gmail API (read-only)
- Runs on `localhost`
- No remote servers required

---

## Local-First by Design

Satstack is intentionally **not** a hosted SaaS.

- OAuth tokens are stored locally
- Emails are parsed locally
- Data never leaves your machine unless _you_ export it

Future sync options (if added) will be encrypted and opt-in.

---

## Development Setup

### Requirements

- Node.js (>= 18)
- pnpm
- Go (>= 1.22)

### Install

From repo root:

```bash
pnpm install
```

Frontend

```bash
cd frontend
pnpm dev
```

Backend

```bash
cd backend
go run ./cmd/satstackd
```

## Status

### 🚧 Early development / personal-use first

Satstack is currently being built to solve the author’s own problem. Expect
rough edges, breaking changes, and rapid iteration.

## Roadmap (high level)

- Coinbase email parsing
- Average buy price & stats
- Local dashboard
- Export / import encrypted data
- Optional BTC price feeds
- Optional Bitcoin node integration (advanced)

## Philosophy

Bitcoin removes the need to trust third parties with money. Satstack applies the
same idea to portfolio tracking.

## License

This project is licensed under the [MIT License](LICENSE).
