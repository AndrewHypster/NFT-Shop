import Main from "/pages/main.js";
import About from "/pages/about.js";

const routes = {
  "/": Main(),
  "/about": About(),
};

const renderRoute = () => {
  const path = window.location.pathname;
  const root = document.getElementById("root");
  root.innerHTML = routes[path] ? routes[path]() : "<h1>404 Not Found</h1>";
};

// Викликаємо renderRoute під час завантаження
window.onpopstate = renderRoute;
document.addEventListener("DOMContentLoaded", () => {
  renderRoute();
});
