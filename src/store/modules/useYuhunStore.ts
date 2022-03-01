import type { IGeneYuhun } from '@/core/geneYuhun';
import { defineStore } from 'pinia';

export interface IYuhunStore {
  geneList: IGeneYuhun[];
}

export const YUHUN_KEY = 'yuhun';

const useYuhunStore = defineStore({
  id: YUHUN_KEY,
  state: (): IYuhunStore => {
    return {
      geneList: [],
    };
  },
  getters: {
    yuhunCount(state) {
      return state.geneList.length;
    },
    getCountById(state) {
      return (id: number) => state.geneList.filter((item) => item.suit.id === id).length;
    },
    lockCount(state) {
      return state.geneList.filter((item) => item.isLock).length;
    },
    getYuhunById(state) {
      return (id: number): IGeneYuhun[] => state.geneList.filter((item) => item.suit.id === id);
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
  },
});

export const initYuhunStore = () => {
  const instance = useYuhunStore();
  instance.$subscribe((mutation, state) => {
    localStorage.setItem(instance.$id, JSON.stringify(state));
  });

  const val = localStorage.getItem(instance.$id);
  if (val) {
    instance.$patch(JSON.parse(val));
  }
};

export default useYuhunStore;