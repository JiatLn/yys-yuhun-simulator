export const randVal = (section: [number, number]) => {
  return section[0] + Math.random() * (section[1] - section[0]);
};
