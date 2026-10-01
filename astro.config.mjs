// @ts-check
import { defineConfig } from 'astro/config';

// Сайт публикуется на GitHub Pages проекта, то есть в подкаталоге /weragen-site/.
// При переходе на собственный домен site меняется на адрес домена, а base удаляется.
export default defineConfig({
    site: 'https://egsp.github.io',
    base: '/weragen-site',
    devToolbar: { enabled: false },
});
