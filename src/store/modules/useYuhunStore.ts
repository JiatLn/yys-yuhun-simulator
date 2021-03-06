import { defineStore } from 'pinia';
import type { EAttr, Pos } from '@/core/types';
import { pickN } from '@/utils/pick';
import type { IGeneYuhun } from '@/core/geneYuhun';
import { randomAttrOpts } from '@/data/yuhunInfo';
import { randVal } from '@/utils/random';

export interface IYuhunStore {
  geneList: IGeneYuhun[];
}

const useYuhunStore = defineStore({
  id: 'yuhun',
  state: (): IYuhunStore => ({ geneList: [] }),
  getters: {
    yuhunCount(): number {
      return this.geneList.length;
    },
    lockCount(): number {
      return this.geneList.filter((item) => item.isLock).length;
    },
    getCountBySuitId() {
      return (suitId: number) => this.geneList.filter((item) => item.suit.id === suitId).length;
    },
    getYuhunBySuitId() {
      return (suitId: number): IGeneYuhun[] =>
        this.geneList
          .filter((item) => item.suit.id === suitId)
          .sort((a, b) => b.timestemp - a.timestemp);
    },
    getYuhunByUlid() {
      return (ulid: string): IGeneYuhun => this.geneList.find((item) => item.ulid === ulid)!;
    },
    getYuhunByPos() {
      return (pos: Pos): IGeneYuhun[] => this.geneList.filter((item) => item.pos === pos)!;
    },
    getAttrsByUlid() {
      return (ulid: string): Map<EAttr, number> => {
        const target = this.geneList.find((item) => item.ulid === ulid);
        const attrsMap = new Map<EAttr, number>();
        target?.randomAttrs.concat(target.strengthAttrs).forEach((item) => {
          const att = attrsMap.get(item.type);
          if (att) attrsMap.set(item.type, att + item.val);
          else attrsMap.set(item.type, item.val);
        });
        return attrsMap;
      };
    },
  },
  actions: {
    addYuhun(yuhun: IGeneYuhun) {
      this.geneList.unshift(yuhun);
    },
    // 解锁/加锁
    updateLock(ulid: string) {
      const yuhun = this.getYuhunByUlid(ulid)!;
      yuhun.isLock = !yuhun.isLock;
    },
    // 强化
    levelUpYuhun(ulid: string, nextLevel: number) {
      const yuhun = this.getYuhunByUlid(ulid)!;
      // 强化到15上锁
      if (nextLevel === 15 && !yuhun.isLock) {
        this.updateLock(ulid);
      }
      if (nextLevel <= yuhun.level) return;
      let upTimes = (nextLevel - yuhun.level) / 3;
      while (upTimes) {
        upTimes--;
        const attrCount = new Set<EAttr>(
          yuhun.randomAttrs.concat(yuhun.strengthAttrs).map((item) => item.type)
        ).size;
        yuhun.level += 3;
        if (attrCount === 4) {
          const randomAttr = pickN(yuhun.randomAttrs.concat(yuhun.strengthAttrs));
          const growth = randomAttrOpts.find((item) => item.value === randomAttr.type)!.growth;
          yuhun.strengthAttrs.push({
            name: randomAttr.name,
            val: randVal(growth),
            type: randomAttr.type,
          });
        } else {
          // 在全部属性中随机新增属性
          const randomAttr = pickN(randomAttrOpts);
          yuhun.strengthAttrs.push({
            name: randomAttr.label,
            val: randVal(randomAttr.growth),
            type: randomAttr.value,
          });
        }
      }
    },
    // 重置御魂强化
    resetYuhun(ulid: string) {
      const yuhun = this.getYuhunByUlid(ulid)!;
      yuhun.strengthAttrs = [];
      yuhun.level = 0;
      yuhun.resetTimes++;
    },
    // 只保留上锁的御魂
    clearYuhunStore() {
      this.geneList = this.geneList.filter((item) => item.isLock);
    },
  },
});

export const initYuhunStore = () => {
  const instance = useYuhunStore();
  instance.$subscribe((mutation, state: IYuhunStore) => {
    localStorage.setItem(instance.$id, JSON.stringify(state));
  });
  const val = localStorage.getItem(instance.$id);
  if (val) {
    instance.$patch(JSON.parse(val));
  }
};

export default useYuhunStore;
