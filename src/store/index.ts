import useUserStore from '@/store/modules/useUserStore';
import useAccountStore from '@/store/modules/useAccountStore';
import useConfigStore from '@/store/modules/useConfigStore';
import useYuhunStore from '@/store/modules/useYuhunStore';

export * from '@/store/modules/useAccountStore';
export * from '@/store/modules/useUserStore';
export * from '@/store/modules/useYuhunStore';
export * from '@/store/modules/useConfigStore';

const appStore: any = {};
/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.userStore = useUserStore();
  appStore.accountStore = useAccountStore();
  appStore.yuhunStore = useYuhunStore();
  appStore.configStore = useConfigStore();
};

export default appStore;
