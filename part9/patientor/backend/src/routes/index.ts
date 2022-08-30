import express from 'express';
import diagnoseService from '../services/diagnoseService';
import patientService from '../services/patientService';

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

export default router;
