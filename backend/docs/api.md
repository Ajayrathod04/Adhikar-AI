# Adhikar AI API Documentation

This document provides details for all available API endpoints in the Adhikar AI project.

## Health Check
- **Endpoint:** `/health`
- **Method:** `GET`
- **Output:** `{ "status": "ok" }`

## News
- **Endpoint:** `/api/news`
- **Method:** `GET`
- **Output:** `{ "success": true, "data": [...] }`

## Real-time Metrics
- **Endpoint:** `/api/realtime`
- **Method:** `GET`
- **Output:** `{ "success": true, "data": { ... } }`

## Voter Information
- **Endpoint:** `/api/voter-info`
- **Method:** `GET`
- **Output:** `{ "success": true, "data": { ... } }`

## Civic Assets
- **Endpoint:** `/api/civic-assets`
- **Method:** `GET`
- **Output:** `{ "success": true, "data": { ... } }`

## Analytics Logs
- **Endpoint:** `/api/log`
- **Method:** `POST`
- **Input:** `{ "query": "string", "response": "string" }`
- **Output:** `{ "success": true }`

## AI Assistant
- **Endpoint:** `/api/ai/ask`
- **Method:** `POST`
- **Input:** `{ "message": "string" }`
- **Output:** `{ "status": "success", "reply": "string" }`
