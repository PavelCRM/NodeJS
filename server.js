const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('views'));

// Middleware для подсчета просмотров страницы
function countViewsMiddleware(req, res, next) {
    const { path } = req.route;
    const filePath = `./viewsCount_${path}.json`;
    let viewsCount = 0;

    try {
        const fileData = fs.readFileSync(filePath);
        viewsCount = JSON.parse(fileData).count;
    } catch (err) {
        console.error('Error reading file:', err);
    }

    viewsCount++;

    fs.writeFileSync(filePath, JSON.stringify({ count: viewsCount }));

    res.locals.viewsCount = viewsCount;
    next();
}

// Главная страница
app.get('/', countViewsMiddleware, (req, res) => {
    res.render('index');
});

// Страница "О нас"
app.get('/about', countViewsMiddleware, (req, res) => {
    res.render('about');
});

// Слушаем порт
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
