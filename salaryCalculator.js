const taxRates = [
    { limit: 490, rate: 0 },
    { limit: 110, rate: 0.05 },
    { limit: 130, rate: 0.10 },
    { limit: 3166.67, rate: 0.175 },
    { limit: 16000, rate: 0.25 },
    { limit: 30520, rate: 0.30 },
    { limit: Infinity, rate: 0.35 },
  ];
  
  const pensionRates = {
    tier1: { employee: 0, employer: 0.13 },
    tier2: { employee: 0.055, employer: 0 },
    tier3: { employee: 0.05, employer: 0.05 },
  };
  
  function calculateTaxableIncome(grossSalary, allowances) {
    return grossSalary - calculateEmployeePension(grossSalary);
  }
  
  function calculateEmployeePension(grossSalary) {
    const tier2Contribution = grossSalary * pensionRates.tier2.employee;
    const tier3Contribution = grossSalary * pensionRates.tier3.employee;
    return tier2Contribution + tier3Contribution;
  }
  
  function calculateTax(grossSalary) {
    let taxableIncome = calculateTaxableIncome(grossSalary);
    let tax = 0;
    for (let i = 0; i < taxRates.length; i++) {
      const { limit, rate } = taxRates[i];
      if (taxableIncome > limit) {
        tax += limit * rate;
        taxableIncome -= limit;
      } else {
        tax += taxableIncome * rate;
        break;
      }
    }
    return tax;
  }
  
  function calculateGrossSalary(desiredNetSalary, allowances) {
    let grossSalary = desiredNetSalary;
    let netSalary = 0;
    while (netSalary < desiredNetSalary) {
      grossSalary += 10; // increment the gross salary in small steps
      const tax = calculateTax(grossSalary + allowances);
      const employeePension = calculateEmployeePension(grossSalary);
      netSalary = grossSalary + allowances - tax - employeePension;
    }
    const basicSalary = grossSalary - allowances;
    const employeePension = calculateEmployeePension(grossSalary);
    const employerPension = grossSalary * (pensionRates.tier1.employer + pensionRates.tier3.employer);
  
    return {
      grossSalary,
      basicSalary,
      totalPayeTax: calculateTax(grossSalary + allowances),
      employeePension,
      employerPension,
    };
  }
  
  module.exports = { calculateGrossSalary };