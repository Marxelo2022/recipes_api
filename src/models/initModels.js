const Categories = require("./categories.models")
const Ingredients = require("./ingredients.models")
const IngredientsRecipes = require("./ingredientsRecipes.models")
const IngredientsUsers = require("./ingredientsUsers.models")
const Instructions = require("./instructions.models")
const Recipes = require("./recipes.models")
const Types = require("./types.models")
const UserRecipes = require("./userRecipes.models")
const Users = require("./users.models")

const initModels = () => {
     //? hasMany llave foranea dentro de parentesis
    //? belongsTo llave foranea en primer paramentro

    //* Users 1:M Recipes
    Users.hasMany(Recipes)
    Recipes.belongsTo(Users)

    //* Users 1:M UserRecipes
    Users.hasMany(UserRecipes)
    UserRecipes.belongsTo(Users)

    //* Recipes 1:M UserRecipes
    Recipes.hasMany(UserRecipes)
    UserRecipes.belongsTo(Recipes)

    //* Users 1:M IngredientsUsers
    Users.hasMany(IngredientsUsers)
    IngredientsUsers.belongsTo(Users)

    //* Ingredients 1:M IngredientsUsers
    Ingredients.hasMany(IngredientsUsers)
    IngredientsUsers.belongsTo(Ingredients)

    //* Recipes 1:M Categories
    Categories.hasMany(Recipes)
    Recipes.belongsTo(Categories)

    //* Types 1:M Ingredients
    Types.hasMany(Ingredients)
    Ingredients.belongsTo(Types)

    //* Recipes 1:M IngredientsRecipes
    Recipes.hasMany(IngredientsRecipes)
    IngredientsRecipes.belongsTo(Recipes)

    //* Ingredients 1:M IngredientsRecipes
    Ingredients.hasMany(IngredientsRecipes)
    IngredientsRecipes.belongsTo(Ingredients)

    //* Recipes 1:M Instructions
    Recipes.hasMany(Instructions)
    Instructions.belongsTo(Recipes)

}



module.exports = initModels