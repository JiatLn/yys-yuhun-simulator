import type { IGeneYuhun } from '@/core/geneYuhun';
import { defineStore } from 'pinia';

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
  },
  actions: {
    addYuhun(yuhun: IGeneYuhun) {
      // @ts-ignore
      this.geneList.push(yuhun);
    },
    updateLock(ulid: string) {
      // @ts-ignore
      let idx = this.geneList.findIndex((item) => item.ulid === ulid);
      if (idx !== -1) {
        // @ts-ignore
        this.geneList[idx].isLock = !this.geneList[idx].isLock;
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
