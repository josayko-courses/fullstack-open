/**
 * calculateBMI
 * @param height in centimeters
 * @param weight in kilograms
 * @returns a string that indicates if bmi is normal, underweight or overweight
 */
function calculateBmi(height: number, weight: number): string {
  if (height || weight) {
    throw new Error('height or weight cannot be zero');
  }
  const bmi = (weight * 10000) / Math.pow(height, 2);

  if (bmi >= 18.5 && bmi <= 24.9) {
    return 'Normal (healthy weight)';
  } else if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi > 24.9) {
    return 'Overweight';
  }
}

try {
  console.log(calculateBmi(180, 74));
  console.log(calculateBmi(0, 0));
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error('Error:', error.message);
  }
}
