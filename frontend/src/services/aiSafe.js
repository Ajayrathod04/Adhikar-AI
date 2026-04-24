import axios from 'axios';
import API_BASE_URL from './api';

const KNOWLEDGE_BASE = {
  "how to register": "You can register as a new voter by filling Form 6 on the Voter Services Portal (voters.eci.gov.in). You will need Aadhar card and proof of residence.",
  "eligibility": "To vote in India, you must be an Indian citizen, 18 years of age or older, and your name must be in the electoral roll.",
  "documents": "Valid documents include Aadhar Card, EPIC (Voter ID), MNREGA Job Card, Passbooks with photo, Health Insurance Smart Card, Driving License, PAN Card, and Passport."
};

export const getSmartResponse = async (query) => {
  const lowercaseQuery = query.toLowerCase();
  
  // Try finding a match in knowledge base first
  for (const [key, value] of Object.entries(KNOWLEDGE_BASE)) {
    if (lowercaseQuery.includes(key)) {
      return { reply: value, isAI: false, status: 'Smart Mode Active' };
    }
  }

  try {
    const res = await axios.post(`${API_BASE_URL}/ai/chat`, { message: query });
    return { 
      reply: res.data.reply, 
      isAI: res.data.isAI, 
      status: res.data.isAI ? 'AI Online' : 'Smart Mode Active' 
    };
  } catch (error) {
    console.warn("AI service failed, falling back to smart defaults:", error);
    return { 
      reply: "I'm currently operating in Smart Mode. For specifics on registration, eligibility, or polling, please check our Guide section.", 
      isAI: false, 
      status: 'Smart Mode Active' 
    };
  }
};
