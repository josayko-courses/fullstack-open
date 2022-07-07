/**
 * calculateBMI
 * @param height in centimeters
 * @param weight in kilograms
 * @returns a string that indicates if bmi is normal, underweight or overweight
 */
function calculateBmi(height: number, weight: number): string {
  if (height <= 0 || weight <= 0) {
    throw new Error('height or weight cannot be equals or less than zero');
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

interface CalculateValues {
  h: number;
  w: number;
}

const parseArguments = (args: Array<string>): CalculateValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  else if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      h: Number(args[2]),
      w: Number(args[3])
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

try {
  const { h, w } = parseArguments(process.argv);
  console.log(calculateBmi(h, w));
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error('Error:', error.message);
  }
}
