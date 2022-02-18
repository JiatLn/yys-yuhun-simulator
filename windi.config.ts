import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  alias: {
    'flex-center': 'flex items-center justify-center',
  },
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
});
