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

export const AttrsDict: { [key in ScoreType]: EAttrType[] } = {
  A: [EAttrType.CRIT_POWER, EAttrType.CRIT_RATE, EAttrType.ATTACK_RATE, EAttrType.SPEED],
  F: [EAttrType.CRIT_POWER, EAttrType.CRIT_RATE, EAttrType.HP_RATE, EAttrType.SPEED],
  M: [EAttrType.EFFECT_HIT, EAttrType.SPEED],
  D: [EAttrType.EFFECT_RESIST, EAttrType.SPEED],
  B: [EAttrType.EFFECT_RESIST, EAttrType.EFFECT_HIT, EAttrType.SPEED],
  S: [EAttrType.SPEED],
};

export type ScoreType = 'A' | 'F' | 'M' | 'D' | 'B' | 'S';
