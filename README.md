# Заняття 2 - Стилізація

- Трішки про вбудовані стилі та ванільний CSS
  - Проблема маштабування, підтримки ітд
- Структура папок та файлів
  - Папка компонента
  - Файл компонента
  - Файл стилів
  - Іменування
- CSS-модулі
  - Використання
  - Композиція класів з бібліотекою [clsx](https://www.npmjs.com/package/clsx)
- Нормалізація стилів з [modern-normalize](https://www.npmjs.com/package/modern-normalize)
- Бібліотека [React Icons](https://react-icons.github.io/react-icons/)
- Імпорт кастомних SVG іконок
  - Налаштування `vite-plugin-svgr` у `vite.config.js`
  - Імпорт (дефолтний) SVG файлу як компонента (зображення у папці `assets`)

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg',
    }),
  ],
});
```
