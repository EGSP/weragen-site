# weragen-site

Лендинг weragen, открытой платформы для ИИ-автоматизаций. Статический сайт на Astro,
публикуется на GitHub Pages: <https://egsp.github.io/weragen-site/>.

Сейчас это заготовка: одна страница с названием продукта, без оформления. Тексты лендинга
и оформление появятся позже.

## Устройство

| Путь | Назначение |
|---|---|
| `src/pages/index.astro` | страница |
| `astro.config.mjs` | адрес сайта и каталог публикации |
| `.github/workflows/pages.yml` | сборка и публикация |

## Команды

```bash
npm install
npm run dev        # сервер разработки: http://localhost:4321/weragen-site/
npm run check      # проверка типов
npm run build      # сборка в dist/
npm run preview    # просмотр собранного сайта
```

Требуется Node.js 22.12 или новее; CI использует версию из `.nvmrc`.

## Публикация

Workflow `.github/workflows/pages.yml` запускается в трёх случаях:

- push в `main`: проверка типов, сборка и публикация на GitHub Pages;
- pull request: проверка типов и сборка без публикации;
- ручной запуск на `main`: повторная публикация.

В настройках репозитория источник Pages: **GitHub Actions** (Settings → Pages → Source).

Для собственного домена в `astro.config.mjs` меняется `site` на адрес домена и удаляется
`base`, домен указывается в Settings → Pages → Custom domain, а у регистратора добавляется
DNS-запись по инструкции GitHub.
