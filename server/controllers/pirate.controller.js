const Pirate = require("../models/pirate.model");

module.exports.createPirate = (req, res) => {
  console.log(req.body.position);
  Pirate.exists({ position: "captain" })
    .then((pirateExists) => {
      if (pirateExists && req.body.position == "captain") {
        return Promise.reject({
          errors: { position: { message: "Captain exist" } },
        });
      }
      return Pirate.create(req.body);
    })
    .then((saveResult) => res.json(saveResult))
    .catch((err) => res.status(300).json(err));
};

module.exports.getAllPirates = (request, response) => {
  Pirate.find({}).sort({name:'asc'})
    .then((pirate) => {
      console.log(pirate);
      response.json(pirate);
    })
    .catch((err) => {
      console.log(err);
      response.json(err);
    });
};

module.exports.getPirate = (request, response) => {
  Pirate.findOne({ _id: request.params.id })
    .then((pirate) => response.json(pirate))
    .catch((err) => response.json(err));
};
module.exports.updatePirate = (request, response) => {
  console.log(request.body)
  console.log(request.body)
  Pirate.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
      .then(updatedPirate => response.json(updatedPirate))
      .catch(err => response.json(err))
}


module.exports.deletePirate = (request, response) => {
  Pirate.deleteOne({ _id: request.params.id })
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
}