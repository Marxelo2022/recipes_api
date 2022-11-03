const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Ingredients = require('./ingredients.models')
const Users = require('./users.models')

const IngredientsUsers = db.define('ingredients_users', {
    id: {
        type:DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    }, 
    amount: {
        type: DataTypes.STRING,
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
    ingredientId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'ingredient_id',
        references: {
            key: 'id',
            model: Ingredients
        }
    }
})

module.exports = IngredientsUsers