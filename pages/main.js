const Main = () => {
  const htmlString = "<h1>Головна</h1>";

  // Створення нового парсера
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html").body;
  return doc;
};

export default Main;
