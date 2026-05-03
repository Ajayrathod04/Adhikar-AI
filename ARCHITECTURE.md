# Adhikar AI Architecture

Adhikar AI follows a robust, deterministic-first architecture designed for high availability and reliability.

## Key Design Principles

### Deterministic-First Design
The system prioritizes static, rule-based logic to ensure that core features work even without external dependencies or AI processing. AI is used as a supplemental layer to enhance explanations.

### Fail-Safe APIs
All API endpoints are wrapped in global error handlers and local try-catch blocks. If a service (like Firestore or Gemini) is unavailable, the API returns a structured fallback response instead of failing.

### Modular Backend
The backend is organized into distinct layers:
- **Routes:** Define API structure.
- **Controllers:** Handle request logic.
- **Services:** Manage external integrations (Firestore, AI).
- **Utils/Middleware:** Provide cross-cutting concerns (Logging, Rate Limiting, Error Handling).

## Deployment
The application is containerized using Docker and deployed on Google Cloud Run for seamless scaling and managed execution.
