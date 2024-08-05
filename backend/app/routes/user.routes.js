const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/participante",
    [authJwt.verifyToken, authJwt.isParticipante],
    controller.participanteBoard
  );

  app.get(
    "/api/test/juez",
    [authJwt.verifyToken, authJwt.isJuez],
    controller.juezBoard
  );

  app.get(
    "/api/test/organizadorglobal",
    [authJwt.verifyToken, authJwt.isOrganizadorGlobal],
    controller.organizadorGlobalBoard
  );

  app.get(
    "/api/test/organizadorlocal",
    [authJwt.verifyToken, authJwt.isOrganizadorLocal],
    controller.organizadorLocalBoard
  );
};
