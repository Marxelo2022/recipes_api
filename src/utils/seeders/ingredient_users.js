const uuid = require('uuid');
const ingredientUsers = require('../../models/ingredientsUsers.models');

ingredientUsers.bulkCreate([
    {
        id: uuid.v4(),
        userId: '39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9',
        ingredientId: '0e2a6567-7e93-46ea-94ca-59be5130863d',
        amount: '2 kilos', 
    },
    {
        id: uuid.v4(),
        userId: '4e5304d5-c89c-4504-82d8-23869abffba1',
        ingredientId: '98f0c900-e9f0-435b-87b1-3f4220eddff1',
        amount: '2 kilos', 
    },
    {
        id: uuid.v4(),
        userId: '39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9',
        ingredientId: 'c79a9605-a285-4088-b577-caa059beae90',
        amount: 'una unidad', 
    },
    {
        id: uuid.v4(),
        userId: '4e5304d5-c89c-4504-82d8-23869abffba1',
        ingredientId: '29b66e63-d710-434c-a2b7-b464e9a4fa9b',
        amount: '3 kilos', 
    },
])