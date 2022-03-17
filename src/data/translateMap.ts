import { EAttr } from '@/core/types';

export const AttrMap: Map<EAttr | undefined, string> = new Map([
  [EAttr.ATTACK, '攻击'],
  [EAttr.ATTACK_RATE, '攻击加成'],
  [EAttr.CRIT_POWER, '暴击伤害'],
  [EAttr.CRIT_RATE, '暴击'],
  [EAttr.DEF, '防御'],
  [EAttr.DEF_RATE, '防御加成'],
  [EAttr.EFFECT_HIT, '效果命中'],
  [EAttr.EFFECT_RESIST, '效果抵抗'],
  [EAttr.HP, '生命'],
  [EAttr.HP_RATE, '生命加成'],
  [EAttr.SPEED, '速度'],
]);

export const AttrSimpleMap: Map<EAttr, string> = new Map([
  [EAttr.ATTACK, '攻'],
  [EAttr.ATTACK_RATE, '攻'],
  [EAttr.CRIT_POWER, '爆'],
  [EAttr.CRIT_RATE, '暴'],
  [EAttr.DEF, '防'],
  [EAttr.DEF_RATE, '防'],
  [EAttr.EFFECT_HIT, '命'],
  [EAttr.EFFECT_RESIST, '抗'],
  [EAttr.HP, '生'],
  [EAttr.HP_RATE, '生'],
  [EAttr.SPEED, '速'],
]);
