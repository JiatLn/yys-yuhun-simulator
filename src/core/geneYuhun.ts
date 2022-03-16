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
import { randVal } from '@/utils/random';
import useConfigStore from '@/store/modules/useConfigStore';

export interface IYuhunParams {
  pos?: Pos;
  suitId?: number;
  geneType?: GeneType;
}

export interface IGeneYuhun {
  readonly timestemp: number;
  readonly ulid: string;
  readonly pos: Pos;
  readonly suit: IYuhun;
  readonly randomAttrs: IAttr[];
  readonly mainAttr: IAttrInfo;
  strengthAttrs: IAttr[];
  isLock: boolean;
  level: number;
  resetTimes: number;
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
  // https://yys.163.com/news/notice/2017/05/01/25369_665793.html
  const mainAttr = pickWithWight(mainAttrWithPos(pos));
  const result: IGeneYuhun = {
    timestemp: Date.now(),
    pos,
    suit,
    randomAttrs,
    mainAttr,
    isLock: false,
    ulid: ulid(),
    level: 0,
    strengthAttrs: [],
    resetTimes: 0,
  };
  return result;
};

const geneRandomAttrs = (): IAttr[] => {
  // 假设2-4条属性出现的概率均为1/3
  let attrNum = ~~(Math.random() * 3 + 2); // 2, 3, 4
  return pickN(randomAttrOpts, attrNum).map((item) => ({
    name: item.label,
    val: randVal(item.growth),
    type: item.value,
  }));
};

const mainAttrWithPos = (pos: Pos) => {
  return randomAttrOpts.filter((item) => item.posList.includes(pos));
};

export const getValueWithFmt = (value: number, type: EAttrType) => {
  let digit = 0;
  const configStore = useConfigStore();
  if (configStore.showDigit) {
    digit = 4;
  }
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

// TODO: 权重算法待优化
function pickWithWight(arr: IAttrInfo[]): IAttrInfo {
  const attrs = arr.map((item) => new Array(item.weight).fill(item)).flat();
  return pickN(attrs);
}
