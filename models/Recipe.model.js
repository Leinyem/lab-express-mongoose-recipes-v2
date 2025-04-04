// Your code here ...

//create variables
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema

const recipeSchema = new Schema({
    title: { type: String, required: true, unique: true },
    instructions: { type: String, required: true },
    level: { type: String, enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"] },
    ingredients: { type: [String] },
    image: { type: String, default: "https://images.media-allrecipes.com/images/75131.jpg" },
    duration: { type: Number, min: 0 },
    isArchived: { type: Boolean, default: false },
    created: { type: Date, default: Date.now }
  });


  //create the model

const Recipe = mongoose.model("Recipe", recipeSchema);


//export the model

  module.exports = Recipe;
