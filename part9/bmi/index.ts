import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (!isNaN(height) && !isNaN(weight)) {
    try {
      const bmi = calculateBmi(height, weight);
      res.status(200).json({
        weight: weight,
        height: height,
        bmi: bmi
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
  res.status(400).json({ error: 'malformatted parameters' });
});

/* eslint-disable */
app.post('/exercises', (req, res) => {
  let { daily_exercises, target } = req.body;
  daily_exercises = daily_exercises.map((str: string) => {
    return Number(str);
  });
  target = Number(target);
  if (!daily_exercises.some(isNaN) && !isNaN(target)) {
    try {
      const planning = calculateExercises(daily_exercises, target);
      res.status(200).json(planning);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      res.status(400).json({ error: 'parameters missing' });
    }
  }
  res.status(400).json({ error: 'malformatted parameters' });
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
