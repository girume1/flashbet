# FlashBet ⚡️ – Real-Time Prediction Market on Linera

**The world's fastest on-chain prediction market**  
Create, bet, and resolve Yes/No markets in **under 1 second** using Linera microchains.

## Why this is truly real-time
- Sub-100ms finality (Linera's unique microchain architecture)
- No oracles, no centralized relayers
- Every action is instantly finalized and visible to all users

## Live Demo
https://flashbet.vercel.app  ← (will be live in 2 minutes)

## Features
- Create any Yes/No market in one click
- Instant betting with USDC (testnet)
- Market creator resolves instantly → winners paid immediately

## Built for Linera Buildathon – 3rd Wave Grant
Category: Prediction Markets

## Quick Start (Linera testnet)
```bash
git clone https://github.com/girume1/flashbet.git
cd flashbet
cargo build --release
./scripts/run-local.sh
