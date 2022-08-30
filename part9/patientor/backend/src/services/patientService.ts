import patientsData from '../../data/patients.json';
import { NewPatientData, NonSensitivePatientData, Patient } from '../types';
import { v1 as uuid } from 'uuid';

const patients: Patient[] = patientsData;

const getNonSensitivePatientsData = (): NonSensitivePatientData[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return { id, name, dateOfBirth, gender, occupation };
  });
};

const getPatients = (): Patient[] => {
  return patients;
};

const findById = (id: string): Patient | undefined => {
  const patient = patients.find(p => p.id === id);
  return patient;
};

const addPatient = (patientData: NewPatientData) => {
  const newPatient: Patient = {
    id: uuid(),
    ...patientData
  };
  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  addPatient,
  getNonSensitivePatientsData,
  findById
};
