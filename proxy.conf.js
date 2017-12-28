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
      , "/index.json"
      , "/articles/20171226/1514272955522/5qyn5YWD5pWw5YiG6ZKf5pq06LeM6YC+MzUw54K5X+eptuern+aAjuS5iOWbnuS6i1KeeshaAAaABCzzlpJbmsYfpopHpgZNf5ZKM6K6v572R.json"

    ],
    target: "http://localhost:9181",
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
