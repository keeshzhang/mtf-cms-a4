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
      , "/articles/20171226/1514264529964/5r6z5YWDMjAxOOW5tOS9leWOu+S9leS7jlKeeshaAAaABCzzliIbmnpDluIjlpoLkvZXop6Por7tf5aSW5rGH6aKR6YGT.json"

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
