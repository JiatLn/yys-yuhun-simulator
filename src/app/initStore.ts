import { initUserStore } from '@/store/modules/useUserStore';
import { initAccountStore } from '@/store/modules/useAccountStore';
import { initYuhunStore } from '@/store/modules/useYuhunStore';

export const initStore = () => {
  initUserStore();
  initAccountStore();
  initYuhunStore();
};
