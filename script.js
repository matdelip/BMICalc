// function to convert pounds to kilograms
function convertPoundsToKilograms(pounds) {
  const kilograms = pounds;  // pounds is equal to 1 kilogram
  return kilograms;
}
// function to convert inches to centimeters
function convertInchesToCentimeters(inches) {
  const centimeters = inches * 2.54; // 1 inch is equal to 2.54 centimeters
  return centimeters;
}
// function to calculate BMI
function calculateBMI(weight, height) {
  const kilograms = convertPoundsToKilograms(weight);
  const centimeters = convertInchesToCentimeters(height);
  const meters = centimeters / 100; // convert centimeters to meters
  const bmi = kilograms / (meters * meters);
  // BMI formula: weight kilo / height in centimeters squared
  return bmi;
}

// Event listener for the "Calculate" button
document.getElementById('calculate').addEventListener('click', function() {
  // get the input values
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const bmiDisplay = document.getElementById('results'); // Display BMI results

  // Convert input values to numbers
  const heightInches = parseFloat(heightInput.value);
  const weightPounds = parseFloat(weightInput.value);

  // Convert height input to centimeters and weight to kilograms
  const heightCentimeters = convertInchesToCentimeters(heightInches);
  const weightKilograms = convertPoundsToKilograms(weightPounds);
  
  // Calculate BMI
  const bmi = calculateBMI(weightKilograms, heightCentimeters);

  // Display results
  bmiDisplay.textContent = `BMI: ${bmi.toFixed(2)}`;

  // Output results to console 
  console.log('Height in centimeters: ' + heightCentimeters.toFixed(2), 'cm');
  console.log('Weight in kilograms: ' + weightKilograms.toFixed(2), 'kg');
  console.log('BMI: ' + bmi.toFixed(2));
});
