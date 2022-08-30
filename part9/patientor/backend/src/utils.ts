import { Gender, NewPatientData } from './types';

const isString = (str: unknown): str is string => {
  return typeof str === 'string' || str instanceof String;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Gender).includes(param);
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect name');
  }
  return name;
};

const parseDate = (dateOfBirth: unknown): string => {
  if (!dateOfBirth || !isString(dateOfBirth) || !Date.parse(dateOfBirth)) {
    throw new Error('Incorrect dateOfBirth: ' + dateOfBirth);
  }
  return dateOfBirth;
};

const parseSsn = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error('Incorrect ssn');
  }
  return ssn;
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrect gender: ' + gender);
  }
  return gender;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error('Incorrect occupation');
  }
  return occupation;
};

const isNewPatientData = (obj: unknown): obj is NewPatientData => {
  if (obj !== null && typeof obj === 'object') {
    if (!('name' in obj)) {
      throw new Error('name is missing');
    }
    if (!('dateOfBirth' in obj)) {
      throw new Error('dateOfBirth is missing');
    }
    if (!('ssn' in obj)) {
      throw new Error('ssn is missing');
    }
    if (!('gender' in obj)) {
      throw new Error('gender is missing');
    }
    if (!('occupation' in obj)) {
      throw new Error('occupation is missing');
    }
  }
  return true;
};

const toNewPatientData = (object: unknown): NewPatientData | null => {
  if (isNewPatientData(object)) {
    const newPatient = {
      name: parseName(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseSsn(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation)
    };
    return newPatient;
  }
  return null;
};

export default toNewPatientData;
