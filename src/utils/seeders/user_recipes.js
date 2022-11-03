const uuid = require('uuid');
const userRecipes = require('../../models/userRecipes.models');

userRecipes.bulkCreate([
    {
        id: uuid.v4(),
        favorite: true,
        userId: '4e5304d5-c89c-4504-82d8-23869abffba1',
        recipeId: '1857e885-78ac-48b4-86ab-693b7d85f5bc'
    },
    {
        id: uuid.v4(),
        favorite: true,
        userId: '39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9',
        recipeId: '8efe80b6-ec2b-4133-bfca-3839e7c741df'
    },
    {
        id: uuid.v4(),
        favorite: true,
        userId: '4e5304d5-c89c-4504-82d8-23869abffba1',
        recipeId: '52472541-787f-4a64-804d-011a6e0dd44b'
    }
])