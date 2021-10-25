const crawl = require("./crawl");

const sources = [
  require("./sources/premierleague"),
  require("./sources/kingfut"),
  require("./sources/skysports"),
  require("./sources/sportbild")
];

const promises = sources.map(source => {
  return crawl(source);
});

async function start() {
  const fullData = await Promise.all(promises);
  console.dir(fullData, { depth: null });
}

start();
