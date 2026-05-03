const request = require('supertest');
const app = require('../index');

describe('Adhikar AI API Endpoints', () => {
  
  test('GET /health - Should return system health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
    expect(res.body).toHaveProperty('uptime');
  });

  test('GET /api/health - Should return API health', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'OK');
  });

  test('GET /api/news - Should return election news', async () => {
    const res = await request(app).get('/api/news');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test('GET /api/realtime - Should return realtime stats', async () => {
    const res = await request(app).get('/api/realtime');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('activeVoters');
  });

  test('GET /api/polling-booths - Should return booth data', async () => {
    const res = await request(app).get('/api/polling-booths');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  test('POST /api/log - Should track analytics event', async () => {
    const res = await request(app)
      .post('/api/log')
      .send({ query: 'how to vote', response: 'Step 1...' });
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  test('POST /api/eligibility - Should check voter eligibility', async () => {
    const res = await request(app)
      .post('/api/eligibility')
      .send({ age: 20, citizenship: 'Indian' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('eligible', true);
  });

});
