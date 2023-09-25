import { Request, Response } from "express";
import Todo from "../databases/models/todo";

export default new (class TodoServices {
	async find(req: Request, res: Response): Promise<Response> {
		try {
			const todo = await Todo.findAll();
			return res.status(200).json(todo);
		} catch (error) {
			return res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async findOne(req: Request, res: Response): Promise<Response> {
		try {
			const id = parseInt(req.params.id);
			if (isNaN(id) || id <= 0)
				return res.status(400).json({ error: "Invalid id" });

			const todo = await Todo.findByPk(id);
			if (!todo) return res.status(404).json({ error: "ID Not Found" });

			return res.status(200).json(todo);
		} catch (error) {
			return res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async create(req: Request, res: Response): Promise<Response> {
		try {
			const { title, isDone } = req.body;
			const todo = await Todo.create({ title, isDone });

			return res.status(200).json(todo);
		} catch (error) {
			return res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async update(req: Request, res: Response): Promise<Response> {
		try {
			const id: number = parseInt(req.params.id);
			const todoToUpdate = await Todo.findByPk(id);
			if (!todoToUpdate) return res.status(404).json({ error: "ID Not Found" });

			const updateTodo = req.body;
			const todo = await todoToUpdate.update(updateTodo);

			return res.status(200).json(todo);
		} catch (error) {
			return res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async delete(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			const todoToDelete = await Todo.findByPk(id);
			if (!todoToDelete) return res.status(404).json({ error: "ID Not Found" });

			const todo = await todoToDelete.destroy();

			return res.status(200).json(todo);
		} catch (error) {
			return res.status(500).json({ error: "Internal Server Error" });
		}
	}
})();
