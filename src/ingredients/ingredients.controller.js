const uuid = require('uuid')

const Ingredients = require('../models/ingredients.models')
const IngredientUsers = require('../models/ingredientsUsers.models')

const getAllIngredients = async() => {
    const data = await Ingredients.findAll()
    return data
}

const getIngredientById = async (id) => {
    const data = await Ingredients.findOne({
        where: {
            id
        }
    })
    return data
}

const createIngredient = async (data) => {
    const response = await Ingredients.create({
        id: uuid.v4(),
        name: data.name,
        typeId: data.typeId,
        urlImg: data.urlImg
    })
    return response
}

const updateIngredient = async (id, data) => {
    const response = await Ingredients.update(data, {
        where: {
            id
        }
    })
    return response
}

const deleteIngredient = async (id) => {
    const data = await Ingredients.destroy({
        where: {
            id
        }
    })
    return data
}

const addIngredientToUser = async(data) => {
    const response = await IngredientUsers.create({
        id: uuid.v4(),
        amount: data.amount,
        userId: data.userId,
        ingredientId: data.ingredientId
    })
    return response
}


module.exports = {
    getAllIngredients,
    getIngredientById,
    createIngredient,
    updateIngredient,
    deleteIngredient,
    addIngredientToUser
}