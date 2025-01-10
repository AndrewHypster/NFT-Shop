const http = require("http");
const fs = require("fs");
const path = require("path");

// Мапа для обробки маршрутів
const routes = {
  "/app.js": "/app.js",
  "/pages/about.js": "pages/about.js",
  "/pages/main.js": "pages/main.js",
};

// Створення серверу
const server = http.createServer((req, res) => {
  const filePath = routes[req.url] ?? "index.html"

  const extname = path.extname(filePath);
  let contentType = "text/html"; // за замовчуванням

  if (extname === ".js") {
    contentType = "application/javascript"; // для js файлів
  } else if (extname === ".css") {
    contentType = "text/css";
  }

  res.writeHead(200, { "Content-Type": contentType });
  fs.createReadStream(path.join(__dirname, filePath)).pipe(res);
});

// Запуск серверу на порту 3000
server.listen(3000, () => {
  console.log("Сервер працює на http://localhost:3000");
});
