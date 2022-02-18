export const round = (num: number, precision: number = 2) => {
  return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
};

export const parseImageUrl = (url: string) => {
  const urlReg = /^(https?:|mailto:|tel:)/;
  if (urlReg.test(url)) {
    return url;
  }
  const prefix = import.meta.env.VITE_IMG_URL;
  return prefix + url;
};
