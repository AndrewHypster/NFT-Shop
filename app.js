import Main from "/pages/main.js";
import About from "/pages/about.js";

const path = window.location.pathname;
const root = document.getElementById("root");

switch (path) {
  case "/":
    root.appendChild(Main());
    break;
  case "/about":
    root.appendChild(About());
    break;
  default:
    root.innerHTML = "<h1>Сторінка не знайдена</h1>";
    break;
}
