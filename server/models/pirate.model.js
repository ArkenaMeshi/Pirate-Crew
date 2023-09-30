const mongoose = require("mongoose");
const PirateSchema = new mongoose.Schema(
  {
    name: { type: String , required:[true,"The name must be filled"] },
    image: {type : String ,required:[true,"Image must be set "]},
    treasure: {type:Number,required:[true,"The treasure must be filled"]},
    phrase: {type:String,required:[true,"The phrase must be filled"]},
    position: {
        type: String,
        enum: ['captain','first mate','quarter master','boatswain','powder monkey'],
        required : [true ,"Position is riquired"]
    },
  pegleg: {type:Boolean},
  eyepatch: {type:Boolean},
  hookhand: {type:Boolean}
  },
  { timestamps: true }
);
module.exports = mongoose.model("Pirate", PirateSchema);