/**
 * here you can add generic utils functions,
 * for more specific functions you can create
 * a new file, e.g: reports.ts
 */
export const firstMessage = () => {
  return 'Hello World';
};

/**
 * Converts a date object into 'mm/dd/yyyy' string format.
 */
export const convertDateMDY = (date: Date) => {
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();

  var dateString =
    (m <= 9 ? '0' + m : m) + '/' + (d <= 9 ? '0' + d : d) + '/' + y;
  return dateString;
};

/**
 * Verifies if the email is valid.
 */
export const isEmailValid = (mail: string) => {
  if (mail) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(mail);
  } else {
    return true;
  }
};

/**
 * Verifies if the password meets the requirements:
 * At least 8 characters (maximum of 12)
 * At least 1 lower case letter
 * At least 1 upper case letter
 * No special characters allowed
 */
export const isPasswordValid = (pass: string) => {
  if (pass) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^°~@#$%^&*+='`´|,.;:¡!¿?\"{}<>()\[\]\-_\\]{8,12}$/.test(
      pass
    );
  } else {
    return true;
  }
};

/**
 * Verifies if the username is valid (letters and numbers)
 * (no special characters allowed - exception: underscore "_").
 */
export const isUsernameValid = (user: string) => {
  if (user) {
    return /^(?=.*[a-zA-Z0-9_])[^°~@#$%^&*+='`´|,.;:¡!¿?\"{}<>()\[\]\-\\]{4,}$/.test(
      user
    );
  } else {
    return true;
  }
};
