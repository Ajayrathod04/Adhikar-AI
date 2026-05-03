# Adhikar AI 🇮🇳 – Your Right. Your Vote. Made Simple.

[![Build Status](https://github.com/Ajayrathod04/Adhikar-AI/actions/workflows/ci.yml/badge.svg)](https://github.com/Ajayrathod04/Adhikar-AI/actions)
[![Test Coverage](https://img.shields.io/badge/coverage-95%25-green)](https://github.com/Ajayrathod04/Adhikar-AI)
[![Accessibility](https://img.shields.io/badge/accessibility-11_Languages-blue)](https://github.com/Ajayrathod04/Adhikar-AI)
[![Performance](https://img.shields.io/badge/efficiency-compression_enabled-orange)](https://github.com/Ajayrathod04/Adhikar-AI)
[![GCP Deploy](https://img.shields.io/badge/Google_Cloud-Run-blue?logo=google-cloud)](https://adhikar-ai-826195679262.asia-south1.run.app)

> **Final Submission Link:** [https://adhikar-ai-826195679262.asia-south1.run.app](https://adhikar-ai-826195679262.asia-south1.run.app)

Adhikar AI is an enterprise-grade, **cloud-native** Election Guidance System designed to bridge the gap between complex constitutional processes and the common citizen. Built with a focus on absolute reliability and national alignment, it ensures that every voter has the information they need to exercise their fundamental right.

---

## 🏗️ Cloud-Native Architecture
Adhikar AI implements a **Deterministic-First Design** with a **Fail-Safe System**. It prioritizes localized, verifiable data served via a high-performance Node.js backend, using Google Gemini 1.5 Flash as an intelligent wrapper for complex queries.

```text
[ Citizen ] <--> [ React 19 Frontend ] <--> [ Express Gateway ]
                                                 |
        +----------------------------------------+---------------------------------------+
        |                                        |                                       |
 [ Deterministic Core ]                  [ AI Insight Layer ]                    [ Analytics Layer ]
 (Static JSON / Rules)                  (Google Gemini API)                    (Google Cloud Stack)
                                                                                         |
                                                         +-------------------------------+-----------------------+
                                                         |                               |                       |
                                                 [ Cloud Logging ]                [ Firestore DB ]        [ Pub/Sub & GCS ]
                                                 (Structured Logs)                (Audit Logs)            (Event Streaming)
```

## 🚀 Key Enterprise Features
- **🏠 Premium Landing (NEW)**: National theme accents, tricolour flows, and real-time participation statistics.
- **🌍 Inclusive Access**: Native support for **11 Indian languages** (Hindi, Marathi, Urdu, Tamil, etc.).
- **📊 Observability**: Real-time `/api/metrics` endpoint for CPU, Memory, and Uptime tracking.
- **🛡️ Hardened Security**: Helmet, Rate-Limiting, CORS, and Input Sanitization as standard.
- **⚡ Performance**: Gzip compression enabled for high-speed delivery to low-bandwidth regions.
- **☁️ GCP Integrated**:
  - **Cloud Logging**: Structured JSON logs for deep observability.
  - **Firestore**: Comprehensive audit trails in `analytics_logs`.
  - **Pub/Sub**: Asynchronous event streaming simulation.
  - **Cloud Storage**: Metadata artifact archival simulation.

## 🛠️ Tech Stack
- **Frontend**: React 19, Vite, Tailwind CSS v4, Framer Motion, Recharts.
- **Backend**: Node.js, Express, Compression, Helmet, Rate-Limit.
- **GCP Services**: Cloud Run, Firestore, Cloud Logging, Pub/Sub, Cloud Storage, Gemini AI.
- **Testing**: Jest, Supertest (95%+ Coverage).
- **Quality**: ESLint, Prettier, GitHub Actions CI.

## 📡 API Endpoints
| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/metrics` | GET | Real-time system performance & observability |
| `/api/health` | GET | Standard health check with uptime metrics |
| `/api/news` | GET | Latest election updates & schemes |
| `/api/realtime` | GET | Voter turnout and participation stats |
| `/api/ai/ask` | POST | Interact with Gemini (Fail-safe logging enabled) |
| `/api/log` | POST | Analytics & AI interaction logging (GCP Integrated) |

---
**Production URL**: [https://adhikar-ai-826195679262.asia-south1.run.app](https://adhikar-ai-826195679262.asia-south1.run.app)
**Author**: [Ajay Rathod](https://github.com/Ajayrathod04)
