import ProvincesServices from "../services/ProvincesServices";
import { Request, Response } from "express";

export default new (class TodoController {
	find(req: Request, res: Response) {
		ProvincesServices.find(req, res);
	}

	findOne(req: Request, res: Response) {
		ProvincesServices.findOne(req, res);
	}

	update(req: Request, res: Response) {
		ProvincesServices.update(req, res);
	}

	create(req: Request, res: Response) {
		ProvincesServices.create(req, res);
	}

	delete(req: Request, res: Response) {
		ProvincesServices.delete(req, res);
	}
})();
