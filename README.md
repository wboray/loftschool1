# Сборка для проекта `loftschool1`

## Запуск

    npm install
    
    npm install gulp-cli -g

    gulp


Запустится на порту 8080.

Отслеживает изменения скриптов и стилей.

Появление новых картинок не отслеживает.

Для автоматического открытия в файле `./gulp/tasks/serve.js` в настройках `$.browserSync.init` параметр `open` сделать равным `true`.