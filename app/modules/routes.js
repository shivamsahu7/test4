const orderRoutes = require("./order/orderRoutes");

const routes = [
  {
    path: "/order",
    router: orderRoutes,
  },
];

const registerRoutes = (app) => {
  for (const route of routes) {
    app.use(`/api/v1${route.path}`, route.router);
  }
};

module.exports = registerRoutes;