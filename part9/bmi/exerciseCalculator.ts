interface TrainingResults {
  periodLength: number;
  trainingDays?: number;
  success?: boolean;
  rating?: number;
  ratingDescription?: string;
  target: number;
  average?: number;
}

/**
 * calculateExercices
 * @param exercices number of exercices per day
 * @param target average target of
 * @returns
 */
export function calculateExercises(exercices: number[], target: number) {
  const totalHours = exercices.reduce(
    (previous, current) => previous + current
  );
  const res: TrainingResults = { periodLength: exercices.length, target };
  res.average = totalHours / exercices.length;
  res.trainingDays = exercices.filter(x => x > 0).length;
  res.success = res.average > target ? true : false;

  const ratings = [
    'it is not enough...',
    'not too bad but could be better',
    "you're good to go !"
  ];
  if (res.average <= target - 1) {
    res.rating = 1;
    res.ratingDescription = ratings[0];
  } else if (res.average > target - 1 && res.average < target) {
    res.rating = 2;
    res.ratingDescription = ratings[1];
  } else {
    res.rating = 3;
    res.ratingDescription = ratings[2];
  }
  return res;
}

const parseHours = (args: Array<string>): number[] => {
  const planning = args.slice(2);
  if (planning.length < 2) throw new Error('Not enough arguments');

  const parsedPlanning = planning.map(s => {
    if (isNaN(Number(s))) {
      throw new Error('Provided values were not numbers!');
    }
    return Number(s);
  });
  return parsedPlanning;
};

try {
  const planning = parseHours(process.argv);
  console.log(calculateExercises(planning.slice(1), planning[0]));
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}
