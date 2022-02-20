import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  alias: {
    'flex-center': 'flex items-center justify-center',
    'yys-btn':
      'bg-[#f3b25e] border-[#d68330] text-black border-[2px] rounded py-2 px-6 cursor-pointer text-[20px] shadow-lg',
  },
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
});
