import TodoServices from "../services/TodoServices";
import { Request, Response } from "express";

export default new (class TodoController {
	find(req: Request, res: Response) {
		TodoServices.find(req, res);
	}

	findOne(req: Request, res: Response) {
		TodoServices.findOne(req, res);
	}

	update(req: Request, res: Response) {
		TodoServices.update(req, res);
	}

	create(req: Request, res: Response) {
		TodoServices.create(req, res);
	}

	delete(req: Request, res: Response) {
		TodoServices.delete(req, res);
	}
})();
