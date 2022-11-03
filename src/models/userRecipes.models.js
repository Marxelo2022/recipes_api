const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Recipes = require('./recipes.models')
const Users = require('./users.models')

const UserRecipes = db.define('user_recipes', {
    id: {
        type:DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    favorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: Users
        }
    },
    recipeId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'recipe_id',
        references: {
            key: 'id',
            model: Recipes
        }
    }
})

module.exports = UserRecipes