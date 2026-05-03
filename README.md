# Adhikar AI 🇮🇳 – Your Right. Your Vote. Made Simple.

[![Build Status](https://img.shields.io/github/actions/workflow/status/Ajayrathod04/Adhikar-AI/ci.yml?branch=main)](https://github.com/Ajayrathod04/Adhikar-AI/actions)
[![Test Coverage](https://img.shields.io/badge/coverage-95%25-green)](https://github.com/Ajayrathod04/Adhikar-AI)
[![Accessibility](https://img.shields.io/badge/accessibility-10_Languages-blue)](https://github.com/Ajayrathod04/Adhikar-AI)
[![GCP Deploy](https://img.shields.io/badge/Google_Cloud-Run-blue?logo=google-cloud)](https://adhikar-ai-826195679262.asia-south1.run.app)

Adhikar AI is an enterprise-grade Election Guidance System designed to bridge the gap between complex constitutional processes and the common citizen. Built with a focus on absolute reliability and national alignment, it ensures that every voter has the information they need to exercise their fundamental right.

---

## 🚩 Problem Statement
In large-scale democratic processes, voters face significant hurdles:
- **Complexity**: Navigating registration and polling procedures.
- **Scalability**: Serving millions of citizens simultaneously in multiple languages.
- **Trust**: Ensuring data reliability without AI hallucination.
- **Awareness**: Bridging the gap in candidate transparency and polling booth data.

## 💡 The Solution: Adhikar AI
Adhikar AI implements a **Deterministic-First Architecture**. It prioritizes localized, verifiable data served via a high-performance Node.js backend, using Google Gemini 1.5 Flash as an intelligent wrapper for complex queries.

## 🏗️ Architecture Diagram
```text
[ Citizen ] <--> [ React 19 Frontend ] <--> [ Express Gateway ]
                                                 |
        +----------------------------------------+---------------------------------------+
        |                                        |                                       |
 [ Deterministic Core ]                  [ AI Insight Layer ]                    [ Analytics Layer ]
 (Static JSON / Rules)                  (Google Gemini API)                    (GCP Monitoring)
```

## ✨ Core Features
- **🏠 Smart Dashboard**: Real-time voter readiness tracking and awareness scores.
- **🌍 Multilingual (i18n)**: Native support for 10 Indian languages (Hindi, Marathi, Tamil, Telugu, etc.).
- **🏛️ Civic Visuals**: Integrated national imagery (Parliament, Ashoka Lions) for patriotic alignment.
- **🤖 AI Expert**: Gemini-powered election assistant with robust fail-safe fallbacks.
- **🧠 Candidate Intel**: Unbiased data on candidate performance and records.
- **🧭 Polling Locator**: Real-time booth data, queue status, and locations.

## 🛠️ Tech Stack
- **Frontend**: React 19, Vite, Tailwind CSS v4, Framer Motion, Recharts.
- **Backend**: Node.js, Express, Helmet, CORS, Rate-Limit.
- **GCP Services**: Cloud Run (Compute), Firestore (Logging), Cloud Logging (Monitoring), Gemini (AI).
- **Testing**: Jest, Supertest (95%+ Coverage).

## 📡 API Endpoints
| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/news` | GET | Latest election updates & schemes |
| `/api/realtime` | GET | Voter turnout and participation stats |
| `/api/polling-booths`| GET | Nearby booth data and queue status |
| `/api/ai/ask` | POST | Interact with Gemini (Safe Fallback) |
| `/api/log` | POST | Analytics & AI interaction logging |
| `/health` | GET | Detailed system health & uptime |

## 🧪 Quality & Testing
Backend tests are automated via **Jest**:
- **API Tests**: Validates all routes and controllers.
- **Coverage**: Maintains >95% coverage on core logic.
- **Command**: `npm run test`

## 🚀 Deployment
Deployed on **Google Cloud Run** using a fully containerized Docker workflow.
**Production URL**: [https://adhikar-ai-826195679262.asia-south1.run.app](https://adhikar-ai-826195679262.asia-south1.run.app)

---
**Author**: [Ajay Rathod](https://github.com/Ajayrathod04)
