import { Request, Response } from "express";
import Provinces from "../databases/models/provinces";

export default new (class TodoServices {
	async find(req: Request, res: Response): Promise<Response> {
		try {
			const provinsi = await Provinces.findAll();
			return res.status(200).json(provinsi);
		} catch (error) {
			return res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async findOne(req: Request, res: Response): Promise<Response> {
		try {
			const id = parseInt(req.params.id);
			if (isNaN(id) || id <= 0)
				return res.status(400).json({ error: "Invalid id" });

			const provinsi = await Provinces.findByPk(id);
			if (!provinsi) return res.status(404).json({ error: "ID Not Found" });

			return res.status(200).json(provinsi);
		} catch (error) {
			return res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async create(req: Request, res: Response): Promise<Response> {
		try {
			const { nama_provinsi } = req.body;
			const provinsi = await Provinces.create({ nama_provinsi });

			return res.status(200).json(provinsi);
		} catch (error) {
			return res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async update(req: Request, res: Response): Promise<Response> {
		try {
			const id: number = parseInt(req.params.id);
			const provinsiToUpdate = await Provinces.findByPk(id);
			if (!provinsiToUpdate)
				return res.status(404).json({ error: "ID Not Found" });

			const updateProvinsi = req.body;
			const todo = await provinsiToUpdate.update(updateProvinsi);

			return res.status(200).json(todo);
		} catch (error) {
			return res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async delete(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			const provinsiToDelete = await Provinces.findByPk(id);
			if (!provinsiToDelete)
				return res.status(404).json({ error: "ID Not Found" });

			const provinsi = await provinsiToDelete.destroy();

			return res.status(200).json(provinsi);
		} catch (error) {
			return res.status(500).json({ error: "Internal Server Error" });
		}
	}
})();
