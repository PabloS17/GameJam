const config = require("../config/auth.config");
const db = require("../models");
const Team = require("../models/team.model");
const Video = db.video;
const GameZip = db.gameZip;
const SolicitudSerOrganizador = db.solicitudSerOrganizador;

exports.uploadLink = (req, res) => {

  const video = new Video({
    url: req.body.url,
    team: req.body.team
  });

  video.save((err, video) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "successfully!" });
  });

};

exports.uploadGameZip = (req, res) => {
  const gameZip = new GameZip({
    name: req.body.name,
    team: req.body.team,
    url: req.body.url,
    state: req.body.state,
  });

  gameZip.save((err, game) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "successfully!" });
  });
};



exports.createTeam = (req, res) => {
  const team = new Team({
    name: req.body.team
  });

  team.save((err, game) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "successfully!" });
  });
};

exports.solicitarSerOrganizador = (req, res) => {
  const solicitudSerOrganizador = new SolicitudSerOrganizador({
    name: req.body.name,
    email: req.body.email,
    place: req.body.place,
    description: req.body.description
  });

  solicitudSerOrganizador.save((err, game) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "successfully!" });
  });
};
