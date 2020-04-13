export const toFloatNumber = value => Number(value).toFixed(2);
export const calculatePrice = ({ takenDate, pricePerHour }) =>
  Number(((new Date() - takenDate) * pricePerHour) / (3600 * 1000));
