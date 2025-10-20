# 2rism — лендинг

Статический сайт на HTML/CSS/JS. Оформлен по структуре проекта из примера [`offline-weather-widget`](https://github.com/dekciw/offline-weather-widget).

## Содержание
- О проекте
- Структура
- Локальный старт
- Деплой на GitHub Pages

## О проекте
Лендинг с поиском, подбором отелей и активностей. Репозиторий хранит исходники из локального проекта `2rism`.

## Структура
```
2rism-landing/
 ┣ css/
 ┣ js/
 ┣ img/
 ┣ icons/
 ┣ libs/
 ┣ index.html
```

## Локальный старт
```bash
# клон
git clone https://github.com/dekciw/2rism-landing.git
cd 2rism-landing

# открыть index.html в браузере
open index.html # macOS
```

## Деплой на GitHub Pages
Репозиторий настроен для публикации статического сайта через GitHub Actions.

1. Запушьте код в `main` (уже сделано).
2. Workflow соберёт артефакт и опубликует корень репозитория.
3. В `Settings → Pages` источник: `GitHub Actions`. 

---
MIT © 2025 dekciw