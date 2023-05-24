'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert('users', [{
            name: 'John',
            surname: 'Doe',
            nickname: 'snow123',
            email: 'example@example.com',
            password: 'text',
            phone: '89996443434',
            role_id: 1,
            created_at: new Date(),
            updated_at: new Date()
        }])
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('users', null, {})
    }
};
