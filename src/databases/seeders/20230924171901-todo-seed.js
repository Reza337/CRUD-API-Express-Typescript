"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// await queryInterface.bulkInsert(
		// 	"Todos",
		// 	[
		// 		{
		// 			title: "Belajar Coding",
		// 			isDone: true,
		// 			createdAt: new Date(),
		// 			updatedAt: new Date(),
		// 		},
		// 		{
		// 			title: "Mandi",
		// 			isDone: false,
		// 			createdAt: new Date(),
		// 			updatedAt: new Date(),
		// 		},
		// 	],
		// 	{}
		// );
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
