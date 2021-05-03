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
export const convertDateMDY = (date) => {
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();

  var dateString =
    (m <= 9 ? '0' + m : m) + '/' + (d <= 9 ? '0' + d : d) + '/' + y;
  return dateString;
};
