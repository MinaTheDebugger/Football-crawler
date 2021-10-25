//SkySports News
const url = "https://www.skysports.com/football/news";


module.exports = {
  url,
  wrapper: ".article--post",
  returnResponse: (_, element) => ({
    title: element
      .find(".article--post__title")
      .text()
      .trim(),
    body: element.find(".article--post__teaser").html(),
    url: `${url}${element
      .find(".article--post__teaser .read-more-link")
      .attr("href")}`
  })
};
