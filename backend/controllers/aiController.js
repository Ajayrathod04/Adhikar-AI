const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
dotenv.config();

const genAI = process.env.GEMINI_API_KEY ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY) : null;

exports.chatWithAI = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Fallback / Predefined logic if no API Key
  const fallbackResponse = "I'm your Adhikar AI assistant. Currently, I'm in offline mode. Please refer to the 'Voting Guide' section for official procedures on registration, eligibility, and polling day steps. Remember, you must be 18+ and an Indian citizen to vote.";

  if (!genAI) {
    return res.json({
      status: 'success',
      reply: fallbackResponse,
      isAI: false
    });
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `You are Adhikar AI, a helpful election guidance assistant. 
    Context: You help users understand the Indian election process, eligibility, and deadlines.
    Answer concisely and accurately. 
    User message: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({
      status: 'success',
      reply: text,
      isAI: true
    });
  } catch (error) {
    console.error('AI Error:', error);
    res.json({
      status: 'success',
      reply: fallbackResponse,
      isAI: false,
      error: 'AI service currently unavailable'
    });
  }
};
