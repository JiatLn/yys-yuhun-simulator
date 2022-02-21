import { initUserStore } from '@/store/modules/useUserStore';
import { initAccountStore } from '@/store/modules/useAccountStore';

export const initStore = () => {
  initUserStore();
  initAccountStore();
};
