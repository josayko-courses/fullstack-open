import express from 'express';
import diagnoseService from '../services/diagnoseService';
import patientService from '../services/patientService';
import toNewPatient from '../utils';

const router = express.Router();

router.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

router.get('/diagnoses', (_req, res) => {
  res.send(diagnoseService.getDiagnoses());
});

router.get('/patients', (_req, res) => {
  res.send(patientService.getNonSensitivePatientsData());
});

router.get('/patients/:id', (req, res) => {
  const patient = patientService.findById(req.params.id);
  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
});

router.post('/patients', (req, res) => {
  try {
    const newPatientData = toNewPatient(req.body);
    if (newPatientData) {
      const newPatient = patientService.addPatient(newPatientData);
      res.json(newPatient);
    }
  } catch (e: unknown) {
    let errorMessage = 'Something went wrong.';
    if (e instanceof Error) {
      errorMessage += ' Error: ' + e.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
