
# ⚙️ Base Counter — Minimal Hardhat Template

A small sample Solidity project demonstrating a simple `Counter` contract,  
built for quick testing and deployment on **Base Mainnet** or **Base Sepolia**.

---

## 🧠 Quickstart

```bash
npm install
npx hardhat compile
npx hardhat test
```

---

## 🚀 Deploy to Base

```bash
npx hardhat run scripts/deploy.js --network base
```

To deploy on Base Sepolia (testnet):

```bash
npx hardhat run scripts/deploy.js --network baseSepolia
```

---

## 🧪 Project structure

```
contracts/
 └── Counter.sol
scripts/
 └── deploy.js
test/
 └── Counter.test.js
hardhat.config.js
```

---

## 🗺️ Roadmap
- [ ] Add verification example via Basescan  
- [ ] Add minimal UI for interaction  
- [ ] Add automated deploy GitHub Action  

---

## 🪪 License
MIT © 2025 Igor
