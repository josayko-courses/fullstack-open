import patientsData from '../../data/patients.json';
import { NonSensitivePatientData, Patient } from '../types';

const patients: Patient[] = patientsData;

const getNonSensitivePatientsData = (): NonSensitivePatientData[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return { id, name, dateOfBirth, gender, occupation };
  });
};

const getPatients = (): Patient[] => {
  return patients;
};

const addPatient = () => {
  return null;
};

export default {
  getPatients,
  addPatient,
  getNonSensitivePatientsData
};
