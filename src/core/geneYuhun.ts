import {
  baseYuhunSet,
  allYuhunSet,
  randomAttrOpts,
  waterYuhunSet,
  chiefYuhunSet,
} from '@/data/yuhunInfo';
import { pickN } from '@/utils/pick';
import type { Pos, IAttr, IYuhun, IAttrInfo } from '@/core/types';
import { EAttrType } from '@/core/types';
import { round } from '@/utils/format';
import { ulid } from 'ulid';

export interface IYuhunParams {
  pos?: Pos;
  suitId?: number;
  geneType?: GeneType;
}
export interface IGeneYuhun {
  pos: Pos;
  suit: IYuhun;
  randomAttrs: IAttr[];
  mainAttr: IAttrInfo;
  isLock: boolean;
  ulid: string;
  level: number;
}

export type GeneType = 'all' | 'chief' | 'water' | 'base';

export const geneYuhun = (params: IYuhunParams): IGeneYuhun => {
  // 位置
  const pos = params.pos ?? (~~(Math.random() * 6 + 1) as Pos);
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
  const suit = chooseList.find((item) => item.id === params.suitId) ?? pickN(chooseList);
  // 随机属性 2-4条
  const randomAttrs = geneRandomAttrs();
  // 随机主属性
  const mainAttr = pickN(mainAttrWithPos(pos));
  const result: IGeneYuhun = {
    pos,
    suit,
    randomAttrs,
    mainAttr,
    isLock: false,
    ulid: ulid(),
    level: 0,
  };
  return result;
};

const geneRandomAttrs = (): IAttr[] => {
  let attrNum = ~~(Math.random() * 3 + 2); // 2, 3, 4
  return pickN(randomAttrOpts, attrNum).map((item) => ({
    name: item.label,
    val: randVal(item.growth),
    type: item.value,
  }));
};

const randVal = (growth: [number, number]) => {
  return growth[0] + Math.random() * (growth[1] - growth[0]);
};

const mainAttrWithPos = (pos: Pos) => {
  return randomAttrOpts.filter((item) => item.posList.includes(pos));
};

export const getValueWithFmt = (value: number, type: EAttrType, digit: number = 0) => {
  if (value === 0) return '-';
  if (
    [
      EAttrType.CRIT_RATE,
      EAttrType.CRIT_POWER,
      EAttrType.ATTACK_RATE,
      EAttrType.EFFECT_HIT,
      EAttrType.EFFECT_RESIST,
      EAttrType.HP_RATE,
      EAttrType.DEF_RATE,
    ].includes(type)
  ) {
    return `${round(value, digit)}%`;
  }
  return `${round(value, digit)}`;
};
