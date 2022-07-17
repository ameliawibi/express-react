const { faker } = require("@faker-js/faker");

module.exports = {
  up: async (queryInterface) => {
    const itemsList = [];

    for (let i = 0; i < 100; i += 1) {
      itemsList.push({
        name: faker.commerce.product(),
        type: faker.commerce.productMaterial(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    try {
      const result = await queryInterface.bulkInsert("Items", itemsList);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Items", null, {});
  },
};
