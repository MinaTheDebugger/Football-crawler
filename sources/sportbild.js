//the sport Department of the Bild
const url = "https://sportbild.bild.de/";

module.exports = {
  url,
  wrapper: ".hp-post-parts",
  returnResponse: (_, element) => ({
    title: element
      .find(".hp-post-title")
      .text()
      .trim(),
    body: element.find(".hppp-text").text(),
    url: element
      .find(".hp-post-title")
      .attr("href")
  })
};
