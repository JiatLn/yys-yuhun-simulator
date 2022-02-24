export const round = (num: number, precision: number = 2) => {
  return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
};
