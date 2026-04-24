const electionData = require('../data/electionData.json');

exports.getTimeline = (req, res) => {
  const { location } = req.query;
  let filtered = electionData.elections;
  
  if (location) {
    filtered = filtered.filter(e => 
      e.locations.includes('All States') || 
      e.locations.some(loc => loc.toLowerCase() === location.toLowerCase())
    );
  }
  
  res.json({
    status: 'success',
    data: filtered
  });
};

exports.checkEligibility = (req, res) => {
  const { age, citizenship, documents } = req.body;
  const missing = [];
  
  if (!age || age < 18) {
    missing.push('Must be 18 or older');
  }
  
  if (!citizenship || citizenship.toLowerCase() !== 'indian') {
    missing.push('Must be an Indian citizen');
  }
  
  const requiredDocs = ['Aadhar Card', 'Address Proof'];
  const userDocs = documents || [];
  requiredDocs.forEach(doc => {
    if (!userDocs.includes(doc)) {
      missing.push(`Missing document: ${doc}`);
    }
  });

  res.json({
    status: 'success',
    isEligible: missing.length === 0,
    missingRequirements: missing
  });
};

exports.getVotingGuide = (req, res) => {
  res.json({
    status: 'success',
    data: electionData.steps
  });
};
