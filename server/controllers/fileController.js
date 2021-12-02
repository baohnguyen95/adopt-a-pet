const model = require('../models/petModel');

const fileController={};

fileController.getPets = (req, res, next) => {
  const pet = {
    name: req.body[0].name,
    age: req.body[0].age,
    size: req.body[0].size,
    species: req.body[0].species,
    url: req.body[0].url
  };
  res.locals.pet = pet;
  console.log(res.locals.pet)
  return next();
};

module.exports = fileController;