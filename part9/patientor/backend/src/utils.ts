import { NewPatientData } from './types';

// type Fields = {
//   name: unknown;
//   dateOfBirth: unknown;
//   ssn: unknown;
//   gender: unknown;
//   occupation: unknown;
// };

// TODO: type check
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewPatient = (object: any): NewPatientData => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const newPatient: NewPatientData = {
    ...object
  };
  return newPatient;
};

export default toNewPatient;
