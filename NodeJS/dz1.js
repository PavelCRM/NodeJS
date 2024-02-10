const http = require('http');

let viewsCounter = {
    '/': 0,
    '/about': 0
};

const server = http.createServer((req, res) => {
    console.log('Запрос получен');
    
    if (req.url === '/') {
        viewsCounter['/']++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`<h1>Добро пожаловать на сайт! Просмотров: ${viewsCounter['/']}</h1>`);
    } else if (req.url === '/about') {
        viewsCounter['/about']++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`<h1>About. Просмотров: ${viewsCounter['/about']}</h1>`);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end('<h1>Страница не найдена</h1>');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
