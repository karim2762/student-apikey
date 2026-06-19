const students = require('../data/students.json');

export default function handler(req, res) {

  const apiKey = req.headers["x-api-key"] || req.query.key;

  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({
      success: false,
      message: 'Invalid API Key'
    });
  }

  const roll = req.query.roll?.toLowerCase();

  if (!roll) {
    return res.status(400).json({
      success: false,
      message: 'Roll number is required'
    });
  }

  const student = students[roll];

  if (!student) {
    return res.status(404).json({
      success: false,
      message: 'Student not found'
    });
  }

  return res.status(200).json(student);
}
