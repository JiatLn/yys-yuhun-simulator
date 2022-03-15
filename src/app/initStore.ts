import { initUserStore, initAccountStore, initYuhunStore, initConfigStore } from '@/store';

export const initStore = () => {
  initUserStore();
  initAccountStore();
  initYuhunStore();
  initConfigStore();
};
