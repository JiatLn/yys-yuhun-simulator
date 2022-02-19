import { EAttrType } from '@/utils/types';

export const yuhunInfo = [
  {
    name: '招财猫',
    id: 300010,
    type: EAttrType.DEF_RATE,
  },
  {
    name: '破势',
    id: 300030,
    type: EAttrType.CRIT_RATE,
  },
  {
    name: '针女',
    id: 300036,
    type: EAttrType.CRIT_RATE,
  },
  {
    name: '薙魂',
    id: 300021,
    type: EAttrType.HP_RATE,
  },
  {
    name: '雪幽魂',
    id: 300002,
    type: EAttrType.DEF_RATE,
  },
  {
    name: '魅妖',
    id: 300035,
    type: EAttrType.DEF_RATE,
  },
  {
    name: '三味',
    id: 300007,
    type: EAttrType.CRIT_RATE,
  },
  {
    name: '狂骨',
    id: 300048,
    type: EAttrType.ATTACK_RATE,
  },
  {
    name: '树妖',
    id: 300024,
    type: EAttrType.HP_RATE,
  },
  {
    name: '涅槃之火',
    id: 300006,
    type: EAttrType.HP_RATE,
  },
  {
    name: '网切',
    id: 300026,
    type: EAttrType.CRIT_RATE,
  },
  {
    name: '反枕',
    id: 300011,
    type: EAttrType.DEF_RATE,
  },
  {
    name: '日女巳时',
    id: 300013,
    type: EAttrType.DEF_RATE,
  },
  {
    name: '珍珠',
    id: 300032,
    type: EAttrType.DEF_RATE,
  },
  {
    name: '轮入道',
    id: 300012,
    type: EAttrType.ATTACK_RATE,
  },
  {
    name: '蜃气楼',
    id: 300054,
    type: '首领御魂',
  },
  {
    name: '地藏像',
    id: 300003,
    type: EAttrType.HP_RATE,
  },
  {
    name: '心眼',
    id: 300022,
    type: EAttrType.ATTACK_RATE,
  },
  {
    name: '鸣屋',
    id: 300020,
    type: EAttrType.ATTACK_RATE,
  },
  {
    name: '狰',
    id: 300018,
    type: EAttrType.ATTACK_RATE,
  },
  {
    name: '荒骷髅',
    id: 300052,
    type: '首领御魂',
  },
  {
    name: '蚌精',
    id: 300034,
    type: EAttrType.EFFECT_HIT,
  },
  {
    name: '阴摩罗',
    id: 300027,
    type: EAttrType.ATTACK_RATE,
  },
  {
    name: '鬼灵歌伎',
    id: 300077,
    type: '首领御魂',
  },
  {
    name: '钟灵',
    id: 300015,
    type: EAttrType.HP_RATE,
  },
  {
    name: '伤魂鸟',
    id: 300029,
    type: EAttrType.CRIT_RATE,
  },
  {
    name: '木魅',
    id: 300023,
    type: EAttrType.DEF_RATE,
  },
  {
    name: '火灵',
    id: 300019,
    type: EAttrType.EFFECT_HIT,
  },
  {
    name: '土蜘蛛',
    id: 300050,
    type: '首领御魂',
  },
  {
    name: '镇墓兽',
    id: 300031,
    type: EAttrType.CRIT_RATE,
  },
  {
    name: '兵主部',
    id: 300074,
    type: EAttrType.ATTACK_RATE,
  },
  {
    name: '镜姬',
    id: 300014,
    type: EAttrType.HP_RATE,
  },
  {
    name: '地震鲶',
    id: 300053,
    type: '首领御魂',
  },
  {
    name: '魍魉之匣',
    id: 300008,
    type: EAttrType.EFFECT_RESIST,
  },
  {
    name: '蝠翼',
    id: 300004,
    type: EAttrType.ATTACK_RATE,
  },
  {
    name: '幽谷响',
    id: 300049,
    type: EAttrType.EFFECT_RESIST,
  },
  {
    name: '胧车',
    id: 300051,
    type: '首领御魂',
  },
  {
    name: '返魂香',
    id: 300039,
    type: EAttrType.EFFECT_RESIST,
  },
  {
    name: '青女房',
    id: 300075,
    type: EAttrType.CRIT_RATE,
  },
  {
    name: '骰子鬼',
    id: 300033,
    type: EAttrType.EFFECT_RESIST,
  },
  {
    name: '飞缘魔',
    id: 300073,
    type: EAttrType.EFFECT_HIT,
  },
  {
    name: '被服',
    id: 300009,
    type: EAttrType.HP_RATE,
  },
  {
    name: '涂佛',
    id: 300076,
    type: EAttrType.HP_RATE,
  },
];

export const mainAttrOpts = [
  {
    label: '攻击加成',
    value: EAttrType.ATTACK_RATE,
  },
  {
    label: '速度',
    value: EAttrType.SPEED,
  },
  {
    label: '暴击',
    value: EAttrType.CRIT_RATE,
  },
  {
    label: '暴击伤害',
    value: EAttrType.CRIT_POWER,
  },
  {
    label: '防御加成',
    value: EAttrType.DEF_RATE,
  },
  {
    label: '生命加成',
    value: EAttrType.HP_RATE,
  },
  {
    label: '效果命中',
    value: EAttrType.EFFECT_HIT,
  },
  {
    label: '效果抵抗',
    value: EAttrType.EFFECT_RESIST,
  },
];

export const randomAttrOpts = [
  ...mainAttrOpts,
  {
    label: '攻击',
    value: EAttrType.ATTACK,
  },
  {
    label: '生命',
    value: EAttrType.HP,
  },
  {
    label: '防御',
    value: EAttrType.DEF,
  },
];

export const suitTypeOpts = [
  {
    label: '暴击',
    value: EAttrType.CRIT_RATE,
  },
  {
    label: '攻击加成',
    value: EAttrType.ATTACK_RATE,
  },
  {
    label: '防御加成',
    value: EAttrType.DEF_RATE,
  },

  {
    label: '生命加成',
    value: EAttrType.HP_RATE,
  },
  {
    label: '效果命中',
    value: EAttrType.EFFECT_HIT,
  },
  {
    label: '效果抵抗',
    value: EAttrType.EFFECT_RESIST,
  },
];
