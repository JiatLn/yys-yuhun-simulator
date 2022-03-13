import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

import PurgeIcons from 'vite-plugin-purge-icons';

import Unocss from 'unocss/vite';

import * as path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
  // 加载 .env.[mode]
  const config = loadEnv(mode, './');
  return defineConfig({
    base: './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      Unocss(),
      PurgeIcons({
        /* PurgeIcons Options */
        content: ['**/*.html', '**/*.js', '**/*.vue'],
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'src/auto-import.d.ts',
        resolvers: [AntDesignVueResolver()],
      }),
      Components({
        dts: 'src/components.d.ts',
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    optimizeDeps: {
      include: ['ant-design-vue'],
    },
    server: {
      host: '0.0.0.0',
      proxy: {
        [config.VITE_BASE_API]: {
          target: config.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => {
            const reg = new RegExp(`^${config.VITE_BASE_API}`);
            return path.replace(reg, '');
          },
        },
      },
    },
    // to solve warning: "@charset" must be the first rule in the file
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          additionalData: '@import "./src/assets/styles/mixin.scss";',
        },
      },
    },
    build: {
      // 浏览器兼容性
      target: 'es2015',
      assetsDir: 'assets',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  });
};
