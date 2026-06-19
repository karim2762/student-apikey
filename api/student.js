const students = require('../data/students.json');

export default function handler(req, res) {
const apiKey = req.headers["x-api-key"] || req.query.key;

if (apiKey !== process.env.API_KEY) {
return res.status(401).json({
success: false,
message: "Invalid API Key"
});
}

const { roll, name, branch, place } = req.query;

let results = Object.values(students);

if (roll) {
const student = students[roll.toLowerCase()];
if (!student) {
return res.status(404).json({
success: false,
message: "Student not found"
});
}
return res.status(200).json(student);
}

if (name) {
results = results.filter(student =>
student.name?.toLowerCase().includes(name.toLowerCase())
);
}

if (branch) {
results = results.filter(student =>
student.branch?.toLowerCase().includes(branch.toLowerCase())
);
}

if (place) {
results = results.filter(student =>
student.address?.toLowerCase().includes(place.toLowerCase())
);
}

return res.status(200).json({
success: true,
count: results.length,
data: results
});
}

