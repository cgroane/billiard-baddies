export {};
// import { useCallback, useState } from 'react';

// export const useFormValidation = <T extends Object>(formValues: T, exemptFieldNames: string[]) => {
//   const [error, setError] = useState('');
//   const [formState, setFormState] = useState<T>({...formValues} as T);
  
  
//   const checkFieldsForEmpty = useCallback(() => {
//     const fields = Object.keys(formState);
//     let i: number;

//     let isEmpty = true;
//     for (i = 0; i < fields.length - 1; i++) {
//       if (!exemptFieldNames.find((fieldName) => fieldName === fields[i])) {
//         if (fields[i].length) {
//           isEmpty = true;
//           setError('Please fill out all required fields.');
//           break;
//         };
//       } else {
//         isEmpty = false;
//       }
//       return isEmpty;
//   }
//   }, [formState, exemptFieldNames]);
//   return { error, setError }
// }

// const validateAddress = useCallback(() => {
//   const addressFields = Object.keys(poolTableData.address);
//   let i;
//   let isEmpty = true;
//   for (i = 0; i < addressFields.length - 1; i ++) {
//     if (addressFields[i] !== 'address2' && !poolTableData.address[addressFields[i] as keyof Address].length) {
//       isEmpty = true;
//       updateFormState('error', 'Fill out all required fields')
//       break;
//     } else {
//       isEmpty = false
//     }
//   }
//   return isEmpty;
// }, [poolTableData]);