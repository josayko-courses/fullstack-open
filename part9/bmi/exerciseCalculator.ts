type DailyHours = readonly [
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

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
function calculateExercises(exercices: DailyHours, target: number) {
  const totalHours = exercices.reduce(
    (previous, current) => previous + current
  );
  const res: TrainingResults = { periodLength: 7, target };
  res.average = totalHours / 7;
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

const planning: DailyHours = [3, 0, 2, 4.5, 0, 3, 1];
console.log(calculateExercises(planning, 1));
