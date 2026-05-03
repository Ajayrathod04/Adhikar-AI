const request = require('supertest');
const app = require('../index');

describe('Adhikar AI API Endpoints', () => {
  
  test('GET /health - Should return system health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });

  test('GET /api/health - Should return API health', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.data).toHaveProperty('status', 'OK');
  });

  test('GET /api/news - Should return election news', async () => {
    const res = await request(app).get('/api/news');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  test('GET /api/realtime - Should return realtime stats', async () => {
    const res = await request(app).get('/api/realtime');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('turnout');
  });

  test('GET /api/polling-booths - Should return booth data', async () => {
    const res = await request(app).get('/api/polling-booths');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  test('GET /api/metrics - Should return system metrics', async () => {
    const res = await request(app).get('/api/metrics');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('uptime');
  });

  test('GET /api/candidates - Should return candidate records', async () => {
    const res = await request(app).get('/api/candidates');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  test('POST /api/log - Should track analytics event', async () => {
    const res = await request(app)
      .post('/api/log')
      .send({ query: 'how to vote', response: 'Step 1...', eventType: 'TEST_EVENT' });
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  test('POST /api/eligibility - Should check voter eligibility', async () => {
    const res = await request(app)
      .post('/api/eligibility')
      .send({ age: 20, citizenship: 'Indian', documents: ['Aadhar Card', 'Address Proof'] });
    expect(res.statusCode).toBe(200);
    expect(res.body.data).toHaveProperty('eligible', true);
  });

  test('POST /api/eligibility - Should handle ineligible user', async () => {
    const res = await request(app)
      .post('/api/eligibility')
      .send({ age: 16, citizenship: 'Foreign' });
    expect(res.statusCode).toBe(200);
    expect(res.body.data.eligible).toBe(false);
  });

  test('POST /api/ai/ask - Should return AI response (or fallback)', async () => {
    const res = await request(app)
      .post('/api/ai/ask')
      .send({ message: 'What is Adhikar AI?' });
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('reply');
  });

  test('POST /api/ai/ask - Should return 400 for empty message', async () => {
    const res = await request(app)
      .post('/api/ai/ask')
      .send({ message: '' });
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  test('POST /api/eligibility - Should handle missing body', async () => {
    const res = await request(app)
      .post('/api/eligibility')
      .send({});
    expect(res.statusCode).toBe(200);
    expect(res.body.data.eligible).toBe(false);
  });

  test('GET /api/timeline - Should handle invalid location', async () => {
    const res = await request(app).get('/api/timeline?location=InvalidPlace');
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBe(0);
  });

  test('POST /api/log - Should handle missing eventType', async () => {
    const res = await request(app)
      .post('/api/log')
      .send({ query: 'test' });
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  test('GET /api/voter-info - Should return voter details', async () => {
    const res = await request(app).get('/api/voter-info');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('pollingBooth');
  });

  test('POST /api/eligibility - Should handle non-standard types in schema', async () => {
    // This indirectly tests the 'else' branch in validator.js if we could control schema
    // But since schema is hardcoded in controller, we'd need to test a route that uses a different schema
    // Let's assume there's one or just move on if we can't easily hit it.
    const res = await request(app)
      .post('/api/eligibility')
      .send({ age: 20, citizenship: 'Indian', documents: 'NotAnArray' }); 
    expect(res.statusCode).toBe(200);
    expect(res.body.data.eligible).toBe(false); // Should fail doc check
  });

  test('Error Handler - Should catch 404', async () => {
    const res = await request(app).get('/api/non-existent-route');
    expect(res.statusCode).toBe(404);
  });

  test('Health Check - Root /health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });



});
