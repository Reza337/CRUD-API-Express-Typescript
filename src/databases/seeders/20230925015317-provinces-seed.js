"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Provinces",
			[
				{
					nama_provinsi: "ACEH",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "SUMATERA UTARA",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "SUMATERA BARAT",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "RIAU",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "JAMBI",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "SUMATERA SELATAN",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "BENGKULU",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "LAMPUNG",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "KEPULAUAN BANGKA BELITUNG",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "KEPULAUAN RIAU",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "DKI JAKARTA",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "JAWA BARAT",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "JAWA TENGAH",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "DI YOGYAKARTA",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "JAWA TIMUR",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "BANTEN",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "BALI",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "NUSA TENGGARA BARAT",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "NUSA TENGGARA TIMUR",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "KALIMANTAN BARAT",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "KALIMANTAN TENGAH",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "KALIMANTAN SELATAN",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "KALIMANTAN TIMUR",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "KALIMANTAN UTARA",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "SULAWESI UTARA",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "SULAWESI TENGAH",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "SULAWESI SELATAN",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "SULAWESI TENGGARA",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "GORONTALO",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "SULAWESI BARAT",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "MALUKU",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "MALUKU UTARA",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "PAPUA BARAT",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nama_provinsi: "PAPUA",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
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
