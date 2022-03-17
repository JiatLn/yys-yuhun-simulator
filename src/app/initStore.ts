import { initAccountStore, initConfigStore, initUserStore, initYuhunStore } from '@/store';

export const initStore = () => {
  initUserStore();
  initAccountStore();
  initYuhunStore();
  initConfigStore();
};
