import { defineStore } from 'pinia';

export interface IConfig {
  showDigit: boolean;
}

const useConfigStore = defineStore({
  id: 'config',
  state: (): IConfig => {
    return {
      showDigit: false,
    };
  },
  actions: {
    updateShowDigit() {
      this.showDigit = !this.showDigit;
    },
  },
});

export const initConfigStore = () => {
  const instance = useConfigStore();
  instance.$subscribe((mutation, state) => {
    localStorage.setItem(instance.$id, JSON.stringify(state));
  });

  const val = localStorage.getItem(instance.$id);
  if (val) {
    instance.$patch(JSON.parse(val));
  }
};

export default useConfigStore;
