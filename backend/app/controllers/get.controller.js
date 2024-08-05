const Equipo = require('../models/team.model');
const Zip = require('../models/gameZip.model');
const Video = require('../models/video.model');
const GameZip = require('../models/gameZip.model');

exports.getTeams = (req, res) => {
  Equipo.find({}, 'name', (err, equipos) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'Error al obtener los equipos' });
    } else {
      res.status(200).json(equipos);
    }
  });
};

exports.getZips = (req, res) => {
  Zip.find({}, 'team', (err, zips) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'Error al obtener los equipos' });
    } else {
      res.status(200).json(zips);
    }
  });
};

exports.getVideo = (req, res) => {
  Video.find({}, 'team', (err, zips) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'Error al obtener los equipos' });
    } else {
      res.status(200).json(zips);
    }
  });
};

exports.getGames = (req, res) => {
  GameZip.find({}, 'name', (err, juegos) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'Error al obtener los juegos' });
    } else {
      res.status(200).json(juegos);
    }
  });
};