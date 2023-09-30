const PirateController = require("../controllers/pirate.controller");

module.exports = (app) => {
  app.post("/pirate", PirateController.createPirate);
  app.get("/pirate", PirateController.getAllPirates);
  app.get("/pirate/:id", PirateController.getPirate);
  app.patch("/pirate/:id", PirateController.updatePirate);
  app.delete("/pirate/:id", PirateController.deletePirate);

 
};