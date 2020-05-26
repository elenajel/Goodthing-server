"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("items", [
      {
        item_name: "MacbookPro",
        item_price: "3000000",
        date: "2020-05-25",
        memo: "I WANT IT, but my laptop is still working fine...",
        link: "this is a fake link",
        user_id: 19,
        category_id: 16,
        image_id: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_name: "house",
        item_price: "300000000",
        date: "2020-05-25",
        memo: "내 집 마련하려다 그냥 안삼 ㅎ",
        link: "this is a fake link",
        user_id: 20,
        category_id: 17,
        image_id: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_name: "iPad",
        item_price: "1000000",
        date: "2020-05-25",
        memo: "갖고싶당",
        link: "this is a fake link",
        user_id: 21,
        category_id: 16,
        image_id: 33,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_name: "airplane",
        item_price: "30000000000",
        date: "2020-05-25",
        memo: "차대신 사려다 맘",
        link: "this is a fake link",
        user_id: 22,
        category_id: 17,
        image_id: 34,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_name: "orange",
        item_price: "5000",
        date: "2020-05-25",
        memo: "maybe next time",
        link: "this is a fake link",
        user_id: 21,
        category_id: 18,
        image_id: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_name: "extra large pizza",
        item_price: "5000",
        date: "2020-05-25",
        memo: "다이어트중",
        link: "this is a fake link",
        user_id: 24,
        category_id: 20,
        image_id: 36,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_name: "rollerskates",
        item_price: "1000000",
        date: "2020-05-25",
        memo: "ha...",
        link: "this is a fake link",
        user_id: 19,
        category_id: 19,
        image_id: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_name: "MacbookPro",
        item_price: "3000",
        date: "2020-05-25",
        memo: "I WANT IT, but my laptop is still working fine...",
        link: "this is a fake link",
        user_id: 18,
        category_id: 19,
        image_id: 38,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_name: "MacbookPro",
        item_price: "1000000",
        date: "2020-05-25",
        memo: "I WANT IT, but my laptop is still working fine...",
        link: "this is a fake link",
        user_id: 20,
        category_id: 16,
        image_id: 39,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_name: "MacbookPro",
        item_price: "10",
        date: "2020-05-25",
        memo: "I WANT IT, but my laptop is still working fine...",
        link: "this is a fake link",
        user_id: 18,
        category_id: 18,
        image_id: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_name: "noImage",
        item_price: "3000000",
        date: "2020-05-25",
        memo: "I WANT IT, but my laptop is still working fine...",
        link: "this is a fake link",
        user_id: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_name: "noImage2",
        item_price: "3000",
        date: "2020-05-23",
        memo: "I WANT IT, but my laptop is still working fine...",
        link: "this is a fake link",
        user_id: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("items", null, {});
  },
};
