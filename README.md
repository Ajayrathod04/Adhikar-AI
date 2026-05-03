# Adhikar AI – Your Right. Your Vote. Made Simple.

[![Build Status](https://img.shields.io/github/actions/workflow/status/Ajayrathod04/Adhikar-AI/ci.yml?branch=main)](https://github.com/Ajayrathod04/Adhikar-AI/actions)
[![Test Coverage](https://img.shields.io/badge/coverage-75%25-green)](https://github.com/Ajayrathod04/Adhikar-AI)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-blue)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-MIT-purple)](LICENSE)

Adhikar AI is an AI-powered Election Guidance System designed to bridge the gap between complex constitutional processes and the common citizen. Built with a focus on absolute reliability, it ensures that every voter has the information they need to exercise their fundamental right.

---

## 🚩 Problem Statement
In large-scale democratic processes, voters often face significant hurdles:
- **Confusion**: Complex registration and document requirements.
- **Deadlines**: Missing critical dates for voter roll updates or polling.
- **Lack of Awareness**: Difficulty in finding polling stations or understanding candidate records.
- **Reliability**: Over-reliance on AI systems that can hallucinate or fail in low-connectivity areas.

## 💡 The Solution: Adhikar AI
Adhikar AI implements a **Deterministic-First Architecture**. It prioritizes localized, verifiable, and static data for all core functions, utilizing AI (Gemini) as an optional intelligence layer to enhance user interaction and provide deep insights without compromising system stability.

## ✨ Key Features
- **🏠 Comprehensive Dashboard**: Real-time voter readiness tracking and awareness scores.
- **📅 Election Timeline**: Region-specific deadlines and voting schedules (Deterministic).
- **🧾 Eligibility Checker**: Instant verification of voting rights based on age, citizenship, and documents.
- **🧭 Voting Guide**: Step-by-step registration and polling day instructions.
- **🤖 AI Assistant**: Gemini-powered election expert with robust offline fallback modes.
- **🧠 Candidate Intelligence**: Detailed, unbiased data on candidate performance, party history, and records.

## 🏗️ Architecture
Adhikar AI is built on three core pillars:
1. **Deterministic Core**: All critical data is served via static datasets and local services. If the API key is missing or the server is down, the system remains 100% functional.
2. **AI Enhancement**: Google Gemini API is integrated as a wrapper. It adds "Smart Mode" to the system, translating complex queries into simplified Guidance.
3. **Reliability-First**: Implemented safety layers in both frontend and backend to ensure zero-crash performance.

## 🛠️ Tech Stack
- **Frontend**: React 19, Vite, Tailwind CSS (v4), Framer Motion, Recharts.
- **Backend**: Node.js, Express, Helmet, CORS, Express-Rate-Limit.
- **Persistence**: Google Firestore (Optional / Integration-ready).
- **AI**: Google Generative AI (Gemini 1.5 Flash).
- **Testing**: Jest, Supertest.

## 📡 API Endpoints
| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/timeline` | GET | Retrieve election schedule (supports location filter) |
| `/api/eligibility` | POST | Validate user eligibility criteria |
| `/api/guide` | GET | Fetch step-by-step voting procedures |
| `/api/ai/chat` | POST | Interact with the AI assistant (Safe Fallback) |
| `/api/insight/log` | POST | Log optional analytical events |
| `/api/health` | GET | System health & reliability check |

## 🧪 Testing & Quality
The backend is fortified with automated tests using **Jest** and **Supertest**:
- **API Tests**: Validates all routing and controller logic.
- **Coverage**: Maintains a >75% stmt coverage on core business logic.
- **CI/CD**: Automatic testing and linting on every push/pull request.

## 🔒 Security & Accessibility
- **Security**: Hardened with `helmet` for header security, `cors` for resource sharing, and rate limiting to prevent brute-force attacks.
- **Accessibility**: Built with semantic HTML, full ARIA label support, and keyboard-navigation friendly controls.

## 🚀 Deployment
- **Platform**: Google Cloud Run (Dockerized).
- **Production URL**: [https://adhikar-ai-826195679262.asia-south1.run.app](https://adhikar-ai-826195679262.asia-south1.run.app)

## 🌍 Multilingual Impact
Adhikar AI now supports **10 Major Indian Languages**, ensuring that 90%+ of the Indian population can access election guidance in their native tongue.
*   **Supported**: English, Hindi, Marathi, Tamil, Telugu, Bengali, Gujarati, Kannada, Malayalam, Punjabi.
*   **Persistence**: Auto-saves user preference in browser memory.

## 🏛️ Civic Awareness
Added **"Democracy in Action"** visual module featuring premium high-resolution assets:
*   **Parliament House (Sansad Bhavan)**
*   **Ashoka Lion Capital (4 Lions)**
*   **Voter Ink Finger**
*   All assets are optimized for high-performance loading and accessibility.

## 📂 Folder Structure
```text
Adhikar-AI/
├── .github/workflows/    # CI/CD Workflows
├── backend/              # Node.js Express Server
│   ├── controllers/      # Route Controllers
│   ├── data/             # Static Dataset (JSON)
│   ├── routes/           # API Routing
│   ├── tests/            # Jest Test Suites
│   └── index.js          # Server Entry (Security Layer)
├── frontend/             # Vite + React Client
│   ├── src/
│   │   ├── components/   # UI Fragments (Glassmorphism)
│   │   ├── pages/        # Feature Modules
│   │   ├── services/     # Safe API & AI Wrappers
│   │   └── hooks/        # Real-time Simulation Hooks
│   └── Dockerfile        # Production Nginx Build
└── docker-compose.yml    # Full-stack Orchestration
```

## 🌟 Why Adhikar AI is Special
This project isn't just an AI tool; it’s a **Reliability Engine**. By ensuring that the system works even in "Smart Mode" (without AI), we provide a safety net for voters in diverse technological environments. It is a production-grade solution designed for real-world impact.

---
**Author**: [Ajay Rathod](https://github.com/Ajayrathod04)
