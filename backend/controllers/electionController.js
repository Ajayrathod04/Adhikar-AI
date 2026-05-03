const electionData = require('../data/electionData.json');
const { validateInput } = require('../utils/validator');
const { formatResponse } = require('../utils/responseFormatter');

exports.getTimeline = (req, res) => {
  try {
    const { location } = req.query;
    let filtered = electionData.elections || [];
    
    if (location) {
      filtered = filtered.filter(e => 
        (e.locations && e.locations.includes('All States')) || 
        (e.locations && e.locations.some(loc => loc.toLowerCase() === location.toLowerCase()))
      );
    }
    
    res.json(formatResponse(filtered));
  } catch (error) {
    console.error('[ELECTION-CONTROLLER] getTimeline error:', error.message);
    res.json(formatResponse([], true, "Showing default election timeline"));
  }
};

exports.checkEligibility = (req, res) => {
  try {
    const schema = { age: 'number', citizenship: 'string' };
    const input = validateInput(req.body, schema);
    const { age, citizenship } = input;
    const documents = req.body.documents || [];
    const missing = [];
    
    if (!age || age < 18) {
      missing.push('Must be 18 or older');
    }
    
    if (!citizenship || citizenship.toLowerCase() !== 'indian') {
      missing.push('Must be an Indian citizen');
    }
    
    const requiredDocs = ['Aadhar Card', 'Address Proof'];
    const userDocs = Array.isArray(documents) ? documents : [];
    requiredDocs.forEach(doc => {
      if (!userDocs.includes(doc)) {
        missing.push(`Missing document: ${doc}`);
      }
    });

    res.json(formatResponse({
      eligible: missing.length === 0,
      missingRequirements: missing
    }));
  } catch (error) {
    console.error('[ELECTION-CONTROLLER] checkEligibility error:', error.message);
    res.json(formatResponse({ eligible: false, error: "Validation service unavailable" }, false, "Eligibility check failed"));
  }
};

exports.getVotingGuide = (req, res) => {
  try {
    res.json(formatResponse(electionData.steps || []));
  } catch (error) {
    console.error('[ELECTION-CONTROLLER] getVotingGuide error:', error.message);
    res.json(formatResponse([], true, "Guide temporarily unavailable"));
  }
};

