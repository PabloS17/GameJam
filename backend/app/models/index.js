const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.video = require("./video.model");
db.gameZip = require("./gameZip.model");
db.team = require("./team.model");
db.solicitudSerOrganizador = require("./solicitudSerOrganizador.model");

db.ROLES = ["user", "participante", "juez", "organizadorGlobal"];

module.exports = db;