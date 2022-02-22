function pickN<T extends any>(arr: T[], n: number = 1) {
  if (n > arr.length) {
    throw new Error('pickN: n is larger than arr.length');
  }
  const tmp = [...arr];
  const pickList = [];
  let len = tmp.length;
  let pickNum = n;
  while (pickNum > 0) {
    let randomIdx = ~~(Math.random() * len--);
    pickList.push(tmp[randomIdx]);
    tmp[randomIdx] = tmp[len];
    pickNum--;
  }
  return pickList;
}

export { pickN };
