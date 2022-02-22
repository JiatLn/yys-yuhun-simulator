import {
  baseYuhunSet,
  allYuhunSet,
  randomAttrOpts,
  waterYuhunSet,
  chiefYuhunSet,
} from '@/data/yuhunInfo';
import { pickN } from '@/utils/pick';
import type { Pos } from './types';

export interface IYuhunParams {
  pos?: Pos;
  suitId?: number;
  geneType?: GeneType;
}

export type GeneType = 'all' | 'chief' | 'water' | 'base';

export const geneYuhun = (params: IYuhunParams) => {
  // 位置
  const pos = params.pos ?? ~~(Math.random() * 6 + 1);
  // 御魂类型
  let chooseList;
  switch (params.geneType) {
    case 'water':
      chooseList = waterYuhunSet;
      break;
    case 'base':
      chooseList = baseYuhunSet;
      break;
    case 'chief':
      chooseList = chiefYuhunSet;
      break;
    case 'all':
    default:
      chooseList = allYuhunSet;
      break;
  }
  const suit = chooseList.find((item) => item.id === params.suitId) ?? pickN(chooseList)[0];
  // 随机属性 2-3条
  const randomAttrs = geneRandomAttrs();
  return {
    pos,
    suit,
    randomAttrs,
  };
};

const geneRandomAttrs = () => {
  let attrNum = ~~(Math.random() * 3 + 2);
  return pickN(randomAttrOpts, attrNum).map((item) => ({
    name: item.label,
    val: randVal(item.growth),
  }));
};

const randVal = (growth: [number, number]) => {
  return growth[0] + Math.random() * (growth[1] - growth[0]);
};
