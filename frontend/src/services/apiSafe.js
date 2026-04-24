import axios from 'axios';
import API_BASE_URL from './api';

const MOCK_DATA = {
  timeline: { status: 'success', data: [{ id: 'mock', name: 'Upcoming Election', dates: { voting_day: '2024-05-07' }, locations: ['All'] }] },
  eligibility: { status: 'success', isEligible: true, missingRequirements: [] },
  guide: { status: 'success', data: [{ title: 'Mock Step', content: 'Fallback content' }] }
};

export const apiSafe = {
  get: async (path) => {
    try {
      const res = await axios.get(`${API_BASE_URL}${path}`);
      return res.data;
    } catch (error) {
      console.warn(`API Error on ${path}, returning mock data:`, error);
      const key = path.split('/')[1];
      return MOCK_DATA[key] || { status: 'error', data: [] };
    }
  },
  post: async (path, data) => {
    try {
      const res = await axios.post(`${API_BASE_URL}${path}`, data);
      return res.data;
    } catch (error) {
      console.warn(`API Error on ${path}, returning mock data:`, error);
      const key = path.split('/')[1];
      return MOCK_DATA[key] || { status: 'error' };
    }
  }
};
