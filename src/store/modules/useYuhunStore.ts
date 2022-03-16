import type { EAttrType } from '@/core/types';
import { pickN } from '@/utils/pick';
import type { IGeneYuhun } from '@/core/geneYuhun';
import { defineStore } from 'pinia';
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
    getAttrsByUlid() {
      return (ulid: string): Map<EAttrType, number> => {
        let target = this.geneList.find((item) => item.ulid === ulid);
        let attrsMap = new Map<EAttrType, number>();
        target?.randomAttrs.concat(target.strengthAttrs).forEach((item) => {
          let att = attrsMap.get(item.type);
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
      let yuhun = this.getYuhunByUlid(ulid)!;
      yuhun.isLock = !yuhun.isLock;
    },
    // 强化
    levelUpYuhun(ulid: string, nextLevel: number) {
      let yuhun = this.getYuhunByUlid(ulid)!;
      if (nextLevel <= yuhun.level) return;
      let upTimes = (nextLevel - yuhun.level) / 3;
      while (upTimes) {
        upTimes--;
        let attrCount = new Set<EAttrType>(
          yuhun.randomAttrs.concat(yuhun.strengthAttrs).map((item) => item.type)
        ).size;
        yuhun.level += 3;
        if (attrCount === 4) {
          let randomAttr = pickN(yuhun.randomAttrs.concat(yuhun.strengthAttrs));
          let growth = randomAttrOpts.find((item) => item.value === randomAttr.type)!.growth;
          yuhun.strengthAttrs.push({
            name: randomAttr.name,
            val: randVal(growth),
            type: randomAttr.type,
          });
        } else {
          // 在全部属性中随机新增属性
          let randomAttr = pickN(randomAttrOpts);
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
      let yuhun = this.getYuhunByUlid(ulid)!;
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
