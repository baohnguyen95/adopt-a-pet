const model = require('../models/petModel');

const fileController={};

fileController.getPets = (req, res, next) => {
  const pet = {
    name: req.body.name,
    age: req.body.age,
    size: req.body.size,
    species: req.body.species,
    url: req.body.url
  };
  res.locals.pet = pet;
  console.log(res.locals.pet)
  const text = 'INSERT INTO animal(name, age, size, species, url) VALUES($1, $2, $3, $4, $5)';
  const values = [req.body.name, req.body.age, req.body.size, req.body.species, req.body.url];
  model
    .query(text, values)
    .then(data => {
      console.log(data),
      next();
    }) 
    .catch(e => next(e));
};

fileController.deletePets = (req, res, next) => {
  console.log(req.body.name)
  const text = 'DELETE FROM animal WHERE name = $1';
  const values = [req.body.name];
  model
  .query(text, values)
  .then(data => {
    console.log(data),
    next();
  }) 
  .catch(e => next(e));
};

module.exports = fileController;