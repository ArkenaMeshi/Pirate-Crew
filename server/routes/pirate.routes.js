const PirateController = require("../controllers/pirate.controller");

module.exports = (app) => {
  app.post("/api/pirate", PirateController.createPirate);
  app.get("/api/pirate", PirateController.getAllPirates);
  app.get("/api/pirate/:id", PirateController.getPirate);
  app.patch("/api/pirate/:id", PirateController.updatePirate);
  app.delete("/api/pirate/:id", PirateController.deletePirate);

 
};