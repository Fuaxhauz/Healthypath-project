const calorieCalcForm = document.querySelector('.calorie-calc-form');

const calculateButton = document.querySelector('.calorie-calc-button');

const resultDiv = document.querySelector('.calorie-calc-result');


calculateButton.addEventListener('click', calculateCalories);


function calculateCalories(e) {

  e.preventDefault();


  const age = parseInt(document.querySelector('#age').value);

  const gender = document.querySelector('#gender').value;

  const weight = parseInt(document.querySelector('#weight').value);

  const height = parseInt(document.querySelector('#height').value);


const activityLevel = document.querySelector('#activityLevel').value;
const dietGoal = document.querySelector('#dietGoal').value;


let bmr = 0;

if (gender === 'male') {
bmr = (10 * weight + 6.25*height - 5*age + 5);
} else {
bmr = (10*weight + 6.25*height - 5*age - 161);
}


let dailyCalories = 0;
if (activityLevel === 'sedentary') {
  dailyCalories = bmr * 1.2;
} else if (activityLevel === 'lightlyActive') {
  dailyCalories = bmr * 1.375;
} else if (activityLevel === 'moderatelyActive') {
  dailyCalories = bmr * 1.55;
} else if (activityLevel === 'veryActive') {
  dailyCalories = bmr * 1.725;
} else if (activityLevel === 'extremelyActive') {
  dailyCalories = bmr * 1.9;
}

if (dietGoal === 'loseWeight') {
  dailyCalories *= 0.8;
} else if (dietGoal === 'gainWeight') {
  dailyCalories *= 1.2;
}

resultDiv.textContent = `Your daily calorie needs are: ${Math.round(dailyCalories)} calories`;
}

const macroCalculatorForm = document.querySelector('.macro-calculator-form');

const macroCaloriesInputField = document.querySelector('.macro-calories-input-field');

const macroCalculateButton = document.querySelector('.macro-calculate-button');

const macroCalculatorResults = document.querySelector('.macro-calculator-results');

const macroCarbohydratesValue = document.querySelector('.macro-carbohydrates-value');

const macroProteinValue = document.querySelector('.macro-protein-value');

const macroFatValue = document.querySelector('.macro-fat-value');


macroCalculateButton.addEventListener('click', calculateMacros);


function calculateMacros(e) {

  e.preventDefault();

  const calories = parseInt(macroCaloriesInputField.value);

  const carbs = Math.round(calories * 0.55 / 4); // 55% of calories from carbs, 4 calories per gram

  const protein = Math.round(calories * 0.18 / 4); // 25% of calories from protein, 4 calories per gram

  const fat = Math.round(calories * 0.27 / 9); // 20% of calories from fat, 9 calories per gram


  macroCarbohydratesValue.textContent = carbs;

  macroProteinValue.textContent = protein;

  macroFatValue.textContent = fat;

}

const toggleButton = document.getElementById('toggle-button');
const whiteBackground = document.getElementById('white-background');

toggleButton.addEventListener('click', () => {
  whiteBackground.style.display = whiteBackground.style.display === 'none' ? 'block' : 'none';
});