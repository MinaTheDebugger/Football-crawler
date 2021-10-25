// egyptian Football news
const url = "https://www.kingfut.com/";


module.exports = {
  url,
  wrapper: ".preview",
  returnResponse: (_, element) => ({
    title: element
      .find('[itemprop="name"]')
      .text()
      .trim(),
    body: element.find("p").html(),
    url: element
      .find('[itemprop="name"]')
      .find("a")
      .attr("href")
  })
};
