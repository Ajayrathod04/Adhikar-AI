const request = require('supertest');
const app = require('../index');

describe('Election API', () => {
  it('GET /api/timeline should return election list', async () => {
    const res = await request(app).get('/api/timeline');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('success');
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('POST /api/eligibility should return eligibility status', async () => {
    const res = await request(app)
      .post('/api/eligibility')
      .send({ age: 20, citizenship: 'Indian', documents: ['Aadhar Card', 'Address Proof'] });
    expect(res.statusCode).toEqual(200);
    expect(res.body.isEligible).toBe(true);
  });

  it('POST /api/eligibility should fail for under-age', async () => {
    const res = await request(app)
      .post('/api/eligibility')
      .send({ age: 16, citizenship: 'Indian' });
    expect(res.body.isEligible).toBe(false);
    expect(res.body.missingRequirements).toContain('Must be 18 or older');
  });

  it('GET /api/health should return ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('ok');
  });

  it('GET /api/guide should return steps', async () => {
    const res = await request(app).get('/api/guide');
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it('POST /api/ai/chat should return fallback response without API key', async () => {
    const res = await request(app)
      .post('/api/ai/chat')
      .send({ message: 'How do I register?' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.isAI).toBe(false);
  });
});
