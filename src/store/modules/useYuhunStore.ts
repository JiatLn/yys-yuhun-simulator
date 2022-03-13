import type { EAttrType } from '@/core/types';
import { pickN } from '@/utils/pick';
import type { IGeneYuhun } from '@/core/geneYuhun';
import { defineStore } from 'pinia';
import { randomAttrOpts } from '@/data/yuhunInfo';
import { randVal } from '@/utils/random';

export interface IYuhunStore {
  geneList: IGeneYuhun[];
}

export const YUHUN_KEY = 'yuhun';

const useYuhunStore = defineStore({
  id: YUHUN_KEY,
  state: (): IYuhunStore => ({ geneList: [] }),
  getters: {
    yuhunCount(state: IYuhunStore) {
      return state.geneList.length;
    },
    getCountById(state: IYuhunStore) {
      return (id: number) => state.geneList.filter((item) => item.suit.id === id).length;
    },
    lockCount(state: IYuhunStore) {
      return state.geneList.filter((item) => item.isLock).length;
    },
    getYuhunBySuitId(state: IYuhunStore) {
      return (suitId: number): IGeneYuhun[] =>
        state.geneList.filter((item) => item.suit.id === suitId);
    },
    getYuhunByUlid(state: IYuhunStore) {
      return (ulid: string): IGeneYuhun | undefined =>
        state.geneList.find((item) => item.ulid === ulid);
    },
    getAttrsByUlid(state: IYuhunStore) {
      return (ulid: string): Map<EAttrType, number> => {
        let target = state.geneList.find((item) => item.ulid === ulid);
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
      this.geneList.push(yuhun);
    },
    updateLock(ulid: string) {
      let idx = this.geneList.findIndex((item) => item.ulid === ulid);
      if (idx !== -1) {
        this.geneList[idx].isLock = !this.geneList[idx].isLock;
      }
    },
    // 强化
    levelUpYuhun(ulid: string, nextLevel: number) {
      let yuhun = this.getYuhunByUlid(ulid)!;
      if (nextLevel <= yuhun.level) return;
      let upTimes = (nextLevel - yuhun.level) / 3;
      for (let i = 0; i < upTimes; i++) {
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
          // 随机新增属性
          let randomAttr = pickN(randomAttrOpts);
          yuhun.strengthAttrs.push({
            name: randomAttr.label,
            val: randVal(randomAttr.growth),
            type: randomAttr.value,
          });
        }
      }
    },
  },
});

export const initYuhunStore = () => {
  const instance = useYuhunStore();
  instance.$subscribe((mutation: unknown, state: IYuhunStore) => {
    localStorage.setItem(instance.$id, JSON.stringify(state));
  });

  const val = localStorage.getItem(instance.$id);
  if (val) {
    instance.$patch(JSON.parse(val));
  }
};

export default useYuhunStore;
