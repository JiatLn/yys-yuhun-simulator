function pickN<T>(arr: T[]): T;
function pickN<T>(arr: T[], n: number): T[];

function pickN<T>(arr: T[], n?: number): T | T[] {
  n = n ?? 1;
  if (n > arr.length) {
    throw new Error('pickN: n is larger than arr.length');
  }
  const tmp = [...arr];
  const pickList = [];
  let len = tmp.length;
  let pickNum = n;
  while (pickNum > 0) {
    const randomIdx = ~~(Math.random() * len--);
    pickList.push(tmp[randomIdx]);
    tmp[randomIdx] = tmp[len];
    pickNum--;
  }
  if (n === 1) return pickList[0];
  return pickList;
}

export { pickN };
