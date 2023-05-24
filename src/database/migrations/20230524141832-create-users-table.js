'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {type: Sequelize.DataTypes.STRING, allowNull: false},
            surname: {type: Sequelize.DataTypes.STRING, allowNull: false},
            nickname: {type: Sequelize.DataTypes.STRING, unique: true},
            password: {type: Sequelize.DataTypes.TEXT, allowNull: false},
            email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            phone: {type: Sequelize.DataTypes.STRING},
            role_id: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: 'roles',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE,
            },
        });

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.dropTable('users');
    }
};
