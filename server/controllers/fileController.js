const model = require('../models/petModel');

const fileController={};

fileController.getPets = (req, res, next) => {
  console.log(req.body);
  const pet = {
    name: req.body[0].name,
    age: req.body[0].age,
    size: req.body[0].size,
    species: req.body[0].species,
    url: req.body[0].url
  };
  return next();
};

module.exports = fileController;