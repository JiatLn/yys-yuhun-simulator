import { defineStore } from 'pinia';

export type ICurrencyType = 'golden' | 'purple' | 'water' | 'chief';

export interface IAccount {
  golden: number;
  purple: number;
  water: number;
  chief: number;
}

export const ACCOUNT_KEY = 'account';

const useAccountStore = defineStore({
  id: ACCOUNT_KEY,
  state: (): IAccount => {
    return {
      golden: 10000,
      purple: 6000,
      water: 8000,
      chief: 3000,
    };
  },
  actions: {
    updateAccount(type: ICurrencyType, value: number) {
      this[type] += value;
    },
  },
});

export const initAccountStore = () => {
  const instance = useAccountStore();
  instance.$subscribe((mutation, state) => {
    localStorage.setItem(instance.$id, JSON.stringify(state));
  });

  const val = localStorage.getItem(instance.$id);
  if (val) {
    instance.$patch(JSON.parse(val));
  }
};

export default useAccountStore;
