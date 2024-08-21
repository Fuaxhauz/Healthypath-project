function toggleEyeFriendlyMode() {

    document.body.classList.toggle("eye-friendly-mode");

}


const form = document.querySelector('#insulin-calculator-form');

const resultDiv = document.querySelector('#insulin-calculator-result');


form.addEventListener('submit', (e) => {

  e.preventDefault();


  const bgLevel = parseFloat(document.querySelector('#insulin-calculator-bg-level').value);

  const targetBgLevel = parseFloat(document.querySelector('#insulin-calculator-target-bg-level').value);

  const insSensitivity = parseFloat(document.querySelector('#insulin-calculator-ins-sensitivity').value);

  const insToCarb = parseFloat(document.querySelector('#insulin-calculator-ins-to-carb').value);

  const totalDailyDose = parseFloat(document.querySelector('#insulin-calculator-total-daily-dose').value);

  const mealCarb = parseFloat(document.querySelector('#insulin-calculator-meal-carb').value);


  // Validate user inputs

  let errors = [];


  if (isNaN(bgLevel) || bgLevel <= 0) {

    errors.push('Invalid blood glucose level');

  }

  if (isNaN(targetBgLevel) || targetBgLevel <= 0) {

    errors.push('Invalid target blood glucose level');

  }

  if (isNaN(insSensitivity) || insSensitivity <= 0) {

    errors.push('Invalid insulin sensitivity');

  }

  if (isNaN(insToCarb) || insToCarb <= 0) {

    errors.push('Invalid insulin to carb ratio');

  }

  if (isNaN(totalDailyDose) || totalDailyDose <= 0) {

    errors.push('Invalid total daily dose');

  }

  if (isNaN(mealCarb) || mealCarb < 0) {

    errors.push('Invalid meal carb amount');

  }


  if (errors.length > 0) {

    alert(`Error: ${errors.join(', ')}`);

    return;

  }


  // Calculate total insulin dose

  const correctionDose = (bgLevel - targetBgLevel) / insSensitivity;

  const mealDose = mealCarb / insToCarb;

  const totalInsulinDose = correctionDose + mealDose;


  // Display result

  resultDiv.textContent = `Your total insulin dose is: ${totalInsulinDose.toFixed(2)} units`;

});

window.onload = function() {

    const form = document.getElementById('diabetes-form');
  
    const resultContainer = document.getElementById('result-container');
  
    const resultHeader = document.getElementById('result-header');
  
    const resultMessage = document.getElementById('result-message');
  
  
    form.addEventListener('submit', (e) => {
  
      e.preventDefault();
  
      const age = parseInt(document.getElementById('age').value);
  
      const weight = parseInt(document.getElementById('weight').value);
  
      const height = parseInt(document.getElementById('height').value);
  
      const waistCircumference = parseInt(document.getElementById('waist-circumference').value);
  
      const physicalActivity = document.getElementById('physical-activity').value;
  
      const familyHistory = document.getElementById('family-history').value;
  
  
      const riskScore = calculateRiskScore(age, weight, height, waistCircumference, physicalActivity, familyHistory);
  
  
      if (riskScore < 10) {
  
        resultHeader.textContent = 'Low Risk';
  
        resultMessage.textContent = 'You are at low risk of developing diabetes.';
  
      } else if (riskScore < 20) {
  
        resultHeader.textContent = 'Moderate Risk';
  
        resultMessage.textContent = 'You are at moderate risk of developing diabetes.';
  
      } else {
  
        resultHeader.textContent = 'High Risk';
  
        resultMessage.textContent = 'You are at high risk of developing diabetes.';
  
      }
  
  
      resultContainer.style.display = 'block';
  
    });
  
  
    function calculateRiskScore(age, weight, height, waistCircumference, physicalActivity, familyHistory) {
  
      let riskScore = 0;
  
  
      if (age > 45) {
  
        riskScore += 5;
  
      }
  
  
      if (weight > 80) {
  
        riskScore += 5;
  
      }
  
  
      if (height < 160) {
  
        riskScore += 3;
  
      }
  
  
      if (waistCircumference > 90) {
  
        riskScore += 5;
  
      }
  
  
      if (physicalActivity === 'sedentary') {
  
        riskScore += 5;
  
      }
  
  
      if (familyHistory === 'yes') {
  
        riskScore += 10;
  
      }
  
  
      return riskScore;
  
    }
  
  };

  const glucoseInput = document.getElementById('glucose');

  const insulinInput = document.getElementById('insulin');
  
  const calculateButton = document.getElementById('calculate-button');
  
  const resultElement = document.getElementById('result');
  
  const errorElement = document.getElementById('error');
  
  
  calculateButton.addEventListener('click', (e) => {
  
    e.preventDefault();
  
    const glucoseValue = parseFloat(glucoseInput.value);
  
    const insulinValue = parseFloat(insulinInput.value);
  
  
    if (isNaN(glucoseValue) || glucoseValue <= 0) {
  
      errorElement.textContent = 'Invalid glucose value';
  
      return;
  
    }
  
  
    if (isNaN(insulinValue) || insulinValue <= 0) {
  
      errorElement.textContent = 'Invalid insulin value';
  
      return;
  
    }
  
  
    const logGlucose = Math.log10(glucoseValue);
  
    const logInsulin = Math.log10(insulinValue);
  
    const quickiValue = 1 / (logInsulin + logGlucose);
  
    resultElement.textContent = `QUICKI: ${quickiValue.toFixed(3)}`; // Fixed typo here
  
    errorElement.textContent = '';
  
  
    if (quickiValue < 0.339) {
  
      resultElement.textContent += ` (Insulin Resistance)`;
  
    }
  
  });

const toggleButton = document.getElementById('toggle-button');
const whiteBackground = document.getElementById('white-background');

toggleButton.addEventListener('click', () => {
  whiteBackground.style.display = whiteBackground.style.display === 'none' ? 'block' : 'none';
});