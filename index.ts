import express from "express";
import router from "./src/routes";
import dotenv from "dotenv";
import province from "./src/routes/ProvincesRouter";

// Routing
// app.get("/", (req: Request, res: Response): Response => {
// 	return res.status(200).json({ message: "Ini adalah Pesan Jika berhasil" });
// });

// app.get("/todos", (req: Request, res: Response): Response => {
// 	return res.status(200).json({ data: Todos });
// });

// app.get("/todo/:id", (req: Request, res: Response): Response => {
// 	const id = parseInt(req.params.id);
// 	const data = Todos.find((data) => data.id === id);

// 	return res.status(200).json(data);
// });

// app.post("/todo", (req: Request, res: Response): Response => {
// 	const data: ITodos = req.body;

// 	// Validasi data sesuai dengan antarmuka ITodos
// 	if (
// 		!data ||
// 		typeof data.id !== "number" ||
// 		typeof data.title !== "string" ||
// 		typeof data.isDone !== "boolean"
// 	) {
// 		return res.status(404).json({ error: "Data tidak valid" });
// 	}

// 	Todos.push(data);
// 	// console.log(data);

// 	return res.status(200).json({ data: Todos });
// });

// app.delete("/todo/:id", (req: Request, res: Response): Response => {
// 	const { id } = req.params;
// 	const data: ITodos[] = Todos.filter((todo) => todo.id !== parseInt(id));

// 	return res.status(200).json(data);
// });

async function start(): Promise<void> {
	try {
		dotenv.config();
		const app = express();
		const PORT = process.env.APP_PORT;

		app.use(express.json());
		app.use("/api/v1", router);
		app.use("/api/v1", province);
		app.listen(PORT, () => console.log("Server express running " + PORT));
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
}

void start();

// http://localhost:5000/api/v1/todos
// http://localhost:5000/api/v1/provinces
