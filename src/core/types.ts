export interface IAttrInfo {
  label: string;
  value: EAttrType;
  growth: [number, number];
  posList: Pos[];
}

export interface IYuhun {
  name: string;
  id: number;
  type: EAttrType | '首领御魂';
  suit2: string;
  suit4: string;
  isWater?: boolean;
}

export type Pos = 1 | 2 | 3 | 4 | 5 | 6;

export interface IAttr {
  name: string;
  val: number;
}

export enum EAttrType {
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

export type ScoreType = 'A' | 'F' | 'M' | 'D' | 'B' | 'S';
