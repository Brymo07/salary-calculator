const { calculateGrossSalary } = require('./salaryCalculator');

test('calculate gross salary for given net salary and allowances', () => {
  const desiredNetSalary = 3000;
  const allowances = 500;
  const result = calculateGrossSalary(desiredNetSalary, allowances);

  expect(result.grossSalary).toBeGreaterThan(desiredNetSalary);
  expect(result.basicSalary).toBeGreaterThan(0);
  expect(result.totalPayeTax).toBeGreaterThan(0);
  expect(result.employeePension).toBeGreaterThan(0);
  expect(result.employerPension).toBeGreaterThan(0);
});