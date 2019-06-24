export const required = value => 
  value ?  undefined : 'value is required';
  
export const minLength = value => 
  value.length < 8 ? 'value is too short' : undefined;

export const mailValidation = value =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
