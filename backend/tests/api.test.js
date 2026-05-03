const request = require('supertest');
const app = require('../index');

// Mock Firestore so we don't actually hit the database in tests
jest.mock('../services/firestore', () => {
  return {
    collection: jest.fn().mockReturnThis(),
    add: jest.fn().mockResolvedValue({ id: 'mocked-doc-id' })
  };
});

describe('API Tests', () => {
  test('1. GET /health should return 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });

  test('2. POST /api/log should return success', async () => {
    const res = await request(app)
      .post('/api/log')
      .send({ query: 'test', response: 'test response' });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('success', true);
  });

  test('3. GET /api/news should return array', async () => {
    const res = await request(app).get('/api/news');
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test('4. GET /api/realtime should return data', async () => {
    const res = await request(app).get('/api/realtime');
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('turnout');
  });

  test('5. GET /api/voter-info should return valid structure', async () => {
    const res = await request(app).get('/api/voter-info');
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('pollingBooth');
  });

  test('6. GET /api/civic-assets should return valid data', async () => {
    const res = await request(app).get('/api/civic-assets');
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('nationalSymbols');
  });

  test('7. POST /api/ai/ask should return response', async () => {
    const res = await request(app)
      .post('/api/ai/ask')
      .send({ message: 'What is voting?' });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'success');
    expect(res.body).toHaveProperty('reply');
  });
});
