import type { ScoreType } from '@/core/types';
import { EAttrType } from '@/core/types';

export const AttrMap: Map<EAttrType, string> = new Map([
  [EAttrType.ATTACK, '攻击'],
  [EAttrType.ATTACK_RATE, '攻击加成'],
  [EAttrType.CRIT_POWER, '暴击伤害'],
  [EAttrType.CRIT_RATE, '暴击'],
  [EAttrType.DEF, '防御'],
  [EAttrType.DEF_RATE, '防御加成'],
  [EAttrType.EFFECT_HIT, '效果命中'],
  [EAttrType.EFFECT_RESIST, '效果抵抗'],
  [EAttrType.HP, '生命'],
  [EAttrType.HP_RATE, '生命加成'],
  [EAttrType.SPEED, '速度'],
]);

export const AttrSimpleMap: Map<EAttrType, string> = new Map([
  [EAttrType.ATTACK, '攻'],
  [EAttrType.ATTACK_RATE, '攻'],
  [EAttrType.CRIT_POWER, '爆'],
  [EAttrType.CRIT_RATE, '暴'],
  [EAttrType.DEF, '防'],
  [EAttrType.DEF_RATE, '防'],
  [EAttrType.EFFECT_HIT, '命'],
  [EAttrType.EFFECT_RESIST, '抗'],
  [EAttrType.HP, '生'],
  [EAttrType.HP_RATE, '生'],
  [EAttrType.SPEED, '速'],
]);

export const AttrsDict: Map<ScoreType, EAttrType[]> = new Map([
  ['A', [EAttrType.CRIT_POWER, EAttrType.CRIT_RATE, EAttrType.ATTACK_RATE, EAttrType.SPEED]],
  ['F', [EAttrType.CRIT_POWER, EAttrType.CRIT_RATE, EAttrType.HP_RATE, EAttrType.SPEED]],
  ['M', [EAttrType.EFFECT_HIT, EAttrType.SPEED]],
  ['D', [EAttrType.EFFECT_RESIST, EAttrType.SPEED]],
  ['B', [EAttrType.EFFECT_RESIST, EAttrType.EFFECT_HIT, EAttrType.SPEED]],
  ['S', [EAttrType.SPEED]],
]);
