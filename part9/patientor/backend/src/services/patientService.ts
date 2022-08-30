import patientsData from '../../data/patients.json';
import { NewPatientData, NonSensitivePatientData, Patient } from '../types';
import { v1 as uuid } from 'uuid';
import toNewPatientData from '../utils';

const patients: Patient[] = patientsData.map(obj => {
  // Since toNewPatientData returns an object of type NewPatientData, we need to assert it to be Patient with the as operator.
  const patient = toNewPatientData(obj) as Patient;
  patient.id = obj.id;
  return patient;
});

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
