const PROXY_CONFIG = [
  {
    context: [
      "/index",
      "/account",
      "/logout",
      "/login",
      "/404",
      "/members",
      "/bills",

      "/assets",
      "/libs",
      "/fonts",
      "/jquery",
      "/gallery"
      , "/articles/20171226/1514258096636/ZGRkZGQ.json"

    ],
    target: "http://localhost:9180",
    secure: false,
    bypass: function (req, res, proxyOptions) {

      // if (req.headers.accept.indexOf("html") !== -1) {
      //   console.log("Skipping proxy for browser request.");
      //   return "/index.html";
      // }
      //
      // req.headers["X-Custom-Header"] = "yes";

    }
  }
]

module.exports = PROXY_CONFIG;
