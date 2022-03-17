export type Pos = 1 | 2 | 3 | 4 | 5 | 6;

export interface IAttrInfo {
  label: string;
  value: EAttr;
  growth: [number, number];
  posList: Pos[];
  mainVal: string;
  baseVal: number;
  levelStep: number;
  weight: number;
}

export interface IYuhun {
  name: string;
  id: number;
  type?: EAttr;
  suit2: string;
  suit4: string;
  isWater?: boolean;
  isChief?: boolean;
}

export interface IAttr {
  name: string;
  val: number;
  type: EAttr;
}

export interface ISingleAttr {
  name: string;
  val: number;
  type: ESingleAttr;
}

export enum EAttr {
  ATTACK = 'Attack',
  ATTACK_RATE = 'AttackRate',
  CRIT_POWER = 'CritPower',
  CRIT_RATE = 'CritRate',
  DEF = 'Defense',
  DEF_RATE = 'DefenseRate',
  EFFECT_HIT = 'EffectHitRate',
  EFFECT_RESIST = 'EffectResistRate',
  HP = 'Hp',
  HP_RATE = 'HpRate',
  SPEED = 'Speed',
}

export enum ESingleAttr {
  ATTACK_RATE = 'AttackRate',
  CRIT_RATE = 'CritRate',
  DEF_RATE = 'DefenseRate',
  EFFECT_HIT = 'EffectHitRate',
  EFFECT_RESIST = 'EffectResistRate',
  HP_RATE = 'HpRate',
}
