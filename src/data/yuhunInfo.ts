import type { IAttrInfo, IYuhun } from '@/core/types';
import { EAttrType } from '@/core/types';

export const allYuhunSet: IYuhun[] = [
  {
    name: '招财猫',
    id: 300010,
    type: EAttrType.DEF_RATE,
    suit2: '防御加成30%',
    suit4: '回合开始时，有50%的概率获得2点鬼火。',
  },
  {
    name: '破势',
    id: 300030,
    type: EAttrType.CRIT_RATE,
    suit2: '暴击15%',
    suit4: '造成伤害时，若目标生命比例高于70%，提升40%伤害。',
  },
  {
    name: '针女',
    id: 300036,
    type: EAttrType.CRIT_RATE,
    suit2: '暴击15%',
    suit4: '暴击时，有40%概率对目标造成其生命上限10%的无视防御伤害，最高不超过攻击120%。',
  },
  {
    name: '薙魂',
    id: 300021,
    type: EAttrType.HP_RATE,
    suit2: '生命加成15%',
    suit4:
      '唯一效果。友方被攻击时50%概率守护，使其中的单体伤害降低20%，再分担50%，直到攻击结束。每次攻击最多触发一次。',
  },
  {
    name: '雪幽魂',
    id: 300002,
    type: EAttrType.DEF_RATE,
    suit2: '防御加成30%',
    suit4:
      '造成伤害时，有15%（若目标带有减速效果则为30%）基础概率冰冻1回合；受到攻击时，使攻击者减速30点，持续1回合。',
  },
  {
    name: '魅妖',
    id: 300035,
    type: EAttrType.DEF_RATE,
    suit2: '防御加成30%',
    suit4: '造成伤害时，有25%基础概率使目标混乱1回合。',
  },
  {
    name: '三味',
    id: 300007,
    type: EAttrType.CRIT_RATE,
    suit2: '暴击15%',
    suit4:
      '任一友方承受控制效果和放逐时，使其提升30点速度，持续2回合，此增益效果不可驱散，可叠加2层。',
  },
  {
    name: '狂骨',
    id: 300048,
    type: EAttrType.ATTACK_RATE,
    suit2: '攻击加成15%',
    suit4: '造成伤害时，每拥有1点鬼火，提升8%伤害。',
  },
  {
    name: '树妖',
    id: 300024,
    type: EAttrType.HP_RATE,
    suit2: '生命加成15%',
    suit4: '治疗时，增加20%（若目标生命低于20%，改为增加50%）基础治疗。',
  },
  {
    name: '涅槃之火',
    id: 300006,
    type: EAttrType.HP_RATE,
    suit2: '生命加成15%',
    suit4: '行动结束时，若生命比例低于30%，治疗生命上限15%的生命。',
  },
  {
    name: '网切',
    id: 300026,
    type: EAttrType.CRIT_RATE,
    suit2: '暴击15%',
    suit4: '攻击时，50%概率无视45%防御。',
  },
  {
    name: '反枕',
    id: 300011,
    type: EAttrType.DEF_RATE,
    suit2: '防御加成30%',
    suit4: '造成伤害时，有23%基础概率使目标沉睡1回合。',
  },
  {
    name: '日女巳时',
    id: 300013,
    type: EAttrType.DEF_RATE,
    suit2: '防御加成30%',
    suit4: '造成伤害时，有20%概率击退目标30%行动条，若其带有增益状态、印记，触发概率提升10%。',
  },
  {
    name: '珍珠',
    id: 300032,
    type: EAttrType.DEF_RATE,
    suit2: '防御加成30%',
    suit4: '治疗时，目标获得不可驱散的护盾2回合，能吸收等同基础治疗30%的伤害。',
  },
  {
    name: '轮入道',
    id: 300012,
    type: EAttrType.ATTACK_RATE,
    suit2: '攻击加成15%',
    suit4: '回合结束时，有20%概率获得新的回合。',
  },
  {
    name: '蜃气楼',
    id: 300054,
    isChief: true,
    suit2: '唯一被动，与怪物的战斗开始时，获得庇护。庇护会在消失后5回合重新获得。',
    suit4: '',
  },
  {
    name: '地藏像',
    id: 300003,
    type: EAttrType.HP_RATE,
    suit2: '生命加成15%',
    suit4:
      '受到暴击时，自身100%、友方30%概率获得1回合护盾，能吸收10%生命上限的伤害；对被嘲讽目标降低60%触发概率。',
  },
  {
    name: '心眼',
    id: 300022,
    type: EAttrType.ATTACK_RATE,
    suit2: '攻击加成15%',
    suit4: '造成伤害时，目标生命比例每降低15%，提升10%伤害。',
  },
  {
    name: '鸣屋',
    id: 300020,
    type: EAttrType.ATTACK_RATE,
    suit2: '攻击加成15%',
    suit4: '攻击时，若目标带有控制效果，提升45%伤害。',
  },
  {
    name: '狰',
    id: 300018,
    type: EAttrType.ATTACK_RATE,
    suit2: '攻击加成15%',
    suit4: '受到敌方伤害时，有35%概率反击；对被嘲讽目标降低60%触发概率。',
  },
  {
    name: '荒骷髅',
    id: 300052,
    isChief: true,
    suit2: '唯一被动，提升10%对怪物伤害，若受到怪物伤害，提升伤害效果改为25%，持续1回合。',
    suit4: '',
  },
  {
    name: '蚌精',
    id: 300034,
    type: EAttrType.EFFECT_HIT,
    suit2: '效果命中15%',
    suit4: '战斗开始时，友方全体获得无法驱散的护盾1回合，能吸收等同生命上限10%的伤害。',
  },
  {
    name: '阴摩罗',
    id: 300027,
    type: EAttrType.ATTACK_RATE,
    suit2: '攻击加成15%',
    suit4: '击败目标时，获得3点鬼火。',
  },
  {
    name: '鬼灵歌伎',
    id: 300077,
    isChief: true,
    suit2:
      '唯一被动，每对怪物造成5次伤害后，下一次对怪物造成伤害将会对其造成生命上限20%的无视防御伤害，最高不超过攻击的255%',
    suit4: '',
  },
  {
    name: '钟灵',
    id: 300015,
    type: EAttrType.HP_RATE,
    suit2: '生命加成15%',
    suit4: '造成伤害时，有10%基础概率使目标眩晕1回合。若敌方无人处于眩晕中，则基础概率改为20%。',
  },
  {
    name: '伤魂鸟',
    id: 300029,
    type: EAttrType.CRIT_RATE,
    suit2: '暴击15%',
    suit4: '任一非怪物目标阵亡时，治疗生命上限20%的生命，并提升20%伤害（上限120%）直到战斗结束。',
  },
  {
    name: '木魅',
    id: 300023,
    type: EAttrType.DEF_RATE,
    suit2: '防御加成30%',
    suit4:
      '任何友方受到伤害时，有25%概率削减伤害者1点鬼火，单次攻击内最多触发1次；对被嘲讽目标降低60%触发概率。',
  },
  {
    name: '火灵',
    id: 300019,
    type: EAttrType.EFFECT_HIT,
    suit2: '效果命中15%',
    suit4: '战斗开始时，获得3点鬼火。',
  },
  {
    name: '土蜘蛛',
    id: 300050,
    isChief: true,
    suit2:
      '唯一被动，对怪物造成伤害时，为其附加1层土蜘蛛印记，降低10%速度，并造成10%间接伤害，持续1回合。上限3层。',
    suit4: '',
  },
  {
    name: '镇墓兽',
    id: 300031,
    type: EAttrType.CRIT_RATE,
    suit2: '暴击15%',
    suit4: '生命比例每降低1%，提升暴击伤害的0.5%。',
  },
  {
    name: '兵主部',
    id: 300074,
    type: EAttrType.ATTACK_RATE,
    suit2: '攻击加成15%',
    suit4: '回合结束后，获得1层兵刃（增益，状态）。每层将在造成伤害时无视目标75点防御，上限3层。',
  },
  {
    name: '镜姬',
    id: 300014,
    type: EAttrType.HP_RATE,
    suit2: '生命加成15%',
    suit4: '受到伤害时，有30%概率造成100%反伤；对被嘲讽目标降低60%触发概率。',
  },
  {
    name: '地震鲶',
    id: 300053,
    isChief: true,
    suit2:
      '唯一被动，与怪物的战斗开始时，获得60%减伤；每次受到伤害，将6%减伤转化为提升1.5%伤害，单次攻击内最多触发1次。',
    suit4: '',
  },
  {
    name: '魍魉之匣',
    id: 300008,
    type: EAttrType.EFFECT_RESIST,
    suit2: '效果抵抗15%',
    suit4: '造成伤害时，有25%基础概率随机附加眩晕、沉默、减疗40%、混乱，持续1回合。',
  },
  {
    name: '蝠翼',
    id: 300004,
    type: EAttrType.ATTACK_RATE,
    suit2: '攻击加成15%',
    suit4: '造成伤害时，附带20%吸血。',
  },
  {
    name: '幽谷响',
    id: 300049,
    type: EAttrType.EFFECT_RESIST,
    suit2: '效果抵抗15%',
    suit4: '抵抗控制效果时，有50%概率将该效果反弹给来源目标，且必定命中。',
  },
  {
    name: '胧车',
    id: 300051,
    isChief: true,
    suit2: '唯一被动，受到怪物攻击时，有50%概率增加30%行动条，单次攻击内最多触发1次。',
    suit4: '',
  },
  {
    name: '返魂香',
    id: 300039,
    type: EAttrType.EFFECT_RESIST,
    suit2: '效果抵抗15%',
    suit4: '受到伤害时，有25%基础概率使伤害者眩晕1回合；对被嘲讽目标降低60%触发概率。',
  },
  {
    name: '青女房',
    id: 300075,
    type: EAttrType.CRIT_RATE,
    suit2: '暴击15%',
    suit4:
      '首次受到致命伤害时，移除所有增益和减益，恢复100%生命并使自身冰封1回合，期间提升100%防御、免疫所有减益。若冰封结束时仍存活，则再次恢复100%生命。每回目仅触发一次。',
  },
  {
    name: '骰子鬼',
    id: 300033,
    type: EAttrType.EFFECT_RESIST,
    suit2: '效果抵抗15%',
    suit4: '抵抗时，反击来源目标，该次反击提升50%伤害。未被控制时承受控制效果，增加25%行动条。',
  },
  {
    name: '飞缘魔',
    id: 300073,
    type: EAttrType.EFFECT_HIT,
    suit2: '效果命中15%',
    suit4: '附加负面状态时，无视30%总效果抵抗。',
  },
  {
    name: '被服',
    id: 300009,
    type: EAttrType.HP_RATE,
    suit2: '生命加成15%',
    suit4: '30%减伤。',
  },
  {
    name: '涂佛',
    id: 300076,
    type: EAttrType.HP_RATE,
    suit2: '生命加成15%',
    suit4:
      '唯一效果。回合结束时，若本回合普攻或无法动作，使友方全体提升15%效果抵抗、伤害，维持2回合，自身提升双倍。',
  },
  {
    name: '遗念火',
    isWater: true,
    id: 300079,
    type: EAttrType.EFFECT_HIT,
    suit2: '效果命中15%',
    suit4:
      '携带者回合开始时获得1层念火（上限3层），每层提供15%效果抵抗，携带者施放技能时优先消耗自身念火替代等量鬼火。',
  },
  {
    name: '共潜',
    isWater: true,
    id: 300080,
    type: EAttrType.EFFECT_RESIST,
    suit2: '效果抵抗15%',
    suit4: '回合结束时随机驱散己方1个负面状态，若回合中未造成伤害，则额外随机驱散己方2个负面状态。',
  },
  {
    name: '恶楼',
    isWater: true,
    id: 300081,
    type: EAttrType.HP_RATE,
    suit2: '生命加成15%',
    suit4: '战斗开始时，获得恶楼之力（增伤80%、减伤80%）。在携带者的前8回合，恶楼之力暂时被封禁。',
  },
  {
    name: '贝吹坊',
    isWater: true,
    id: 300082,
    type: EAttrType.ATTACK_RATE,
    suit2: '攻击加成15%',
    suit4: '携带者回合开始获得一层可以抵挡一次伤害的贝甲，贝甲存在时提高25%的伤害。',
  },
  {
    name: '海月火玉',
    isWater: true,
    id: 300083,
    type: EAttrType.CRIT_RATE,
    suit2: '暴击15%',
    suit4: '鬼火或愿力足够时，施放妖术额外消耗1点鬼火或愿力并提升40%伤害。',
  },
  {
    name: '出世螺',
    isWater: true,
    id: 300084,
    type: EAttrType.DEF_RATE,
    suit2: '防御加成30%',
    suit4:
      '每次受到伤害后恢复该伤害10%的生命值。在战斗开始与自身行动前获得螺壳（上限1层），单次受到超过最大生命值的60%的伤害时，将该伤害降低为最大生命值的60%，并移除螺壳。',
  },
];

export const baseYuhunSet = allYuhunSet.filter((item) => !item.isChief);

export const goldenYuhunSet = allYuhunSet.filter((item) => !item.isChief && !item.isWater);

export const chiefYuhunSet = allYuhunSet.filter((item) => item.isChief);

export const waterYuhunSet = allYuhunSet.filter((item) => item.isWater);

export const mainAttrOpts: IAttrInfo[] = [
  {
    label: '攻击加成',
    value: EAttrType.ATTACK_RATE,
    growth: [2.4, 3],
    posList: [2, 4, 6],
    mainVal: '55%',
    baseVal: 10,
    levelStep: 3,
  },
  {
    label: '速度',
    value: EAttrType.SPEED,
    growth: [2.4, 3],
    posList: [2],
    mainVal: '57',
    baseVal: 12,
    levelStep: 3,
  },
  {
    label: '暴击',
    value: EAttrType.CRIT_RATE,
    growth: [2.4, 3],
    posList: [6],
    mainVal: '55%',
    baseVal: 10,
    levelStep: 3,
  },
  {
    label: '暴击伤害',
    value: EAttrType.CRIT_POWER,
    growth: [3.2, 4],
    posList: [6],
    mainVal: '89%',
    baseVal: 14,
    levelStep: 5,
  },
  {
    label: '防御加成',
    value: EAttrType.DEF_RATE,
    growth: [2.4, 3],
    posList: [2, 4, 6],
    mainVal: '55%',
    baseVal: 10,
    levelStep: 3,
  },
  {
    label: '生命加成',
    value: EAttrType.HP_RATE,
    growth: [2.4, 3],
    posList: [2, 4, 6],
    mainVal: '55%',
    baseVal: 10,
    levelStep: 3,
  },
  {
    label: '效果命中',
    value: EAttrType.EFFECT_HIT,
    growth: [3.2, 4],
    posList: [4],
    mainVal: '55%',
    baseVal: 10,
    levelStep: 3,
  },
  {
    label: '效果抵抗',
    value: EAttrType.EFFECT_RESIST,
    growth: [3.2, 4],
    posList: [4],
    mainVal: '55%',
    baseVal: 10,
    levelStep: 3,
  },
];

// 成长属性参考：https://bbs.nga.cn/read.php?tid=15556177
export const randomAttrOpts: IAttrInfo[] = [
  ...mainAttrOpts,
  {
    label: '攻击',
    value: EAttrType.ATTACK,
    growth: [21.6, 27],
    posList: [1],
    mainVal: '486',
    baseVal: 81,
    levelStep: 27,
  },
  {
    label: '生命',
    value: EAttrType.HP,
    growth: [91.2, 114],
    posList: [5],
    mainVal: '2052',
    baseVal: 342,
    levelStep: 114,
  },
  {
    label: '防御',
    value: EAttrType.DEF,
    growth: [4, 5],
    posList: [3],
    mainVal: '104',
    baseVal: 14,
    levelStep: 6,
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

export const posOpts: Record<string, any>[] = [
  {
    pos: 1,
    label: '一号位',
    tips: '固定属性为攻击',
    rotate: 0,
  },
  {
    pos: 2,
    label: '二号位',
    tips: '固定属性从攻击加成、防御加成、生命加成、速度中随机',
    rotate: -45,
  },
  {
    pos: 3,
    label: '三号位',
    tips: '固定属性为防御',
    rotate: -90,
  },
  {
    pos: 4,
    label: '四号位',
    tips: '固定属性从攻击加成、防御加成、生命加成、效果命中、效果抵抗中随机',
    rotate: 180,
  },
  {
    pos: 5,
    label: '五号位',
    tips: '固定属性为生命',
    rotate: 135,
  },
  {
    pos: 6,
    label: '六号位',
    tips: '固定属性从攻击加成、防御加成、生命加成、暴击、暴击伤害中随机',
    rotate: 90,
  },
];
