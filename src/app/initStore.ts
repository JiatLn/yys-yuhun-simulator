import { initUserStore, initAccountStore, initYuhunStore } from '@/store';

export const initStore = () => {
  initUserStore();
  initAccountStore();
  initYuhunStore();
};
