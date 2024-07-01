const express = require('express');
const bodyParser = require('body-parser');
const { calculateGrossSalary } = require('./salaryCalculator');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/calculate-gross-salary', (req, res) => {
  const { desiredNetSalary, allowances } = req.body;

  if (!desiredNetSalary || !allowances) {
    return res.status(400).json({ error: 'Please provide desiredNetSalary and allowances' });
  }

  const result = calculateGrossSalary(desiredNetSalary, allowances);

  return res.json(result);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});