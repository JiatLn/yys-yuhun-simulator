import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  shortcuts: [
    ['flex-c', 'flex items-center justify-center'],
    [
      'yys-btn',
      'bg-#f3b25e border-#d68330 text-black border-2px rounded py-1 px-6 cursor-pointer text-20px shadow',
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1,
      warn: true,
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
