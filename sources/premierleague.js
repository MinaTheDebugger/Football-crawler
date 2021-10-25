const url = "https://www.premierleague.com/";

module.exports = {
  url,
  wrapper: ".elementor-post__text",
  returnResponse: (_, element) => ({
    title: element
      .find(".hero-playlist__thumbnail-figure")
      .text()
      .trim(),
    body: element.find(".elementor-post__excerpt").text(),
    url: element
      .find(".hero-playlist__thumbnail-title")
      .find("a")
      .attr("href")
  })
};
