import { Router } from "express";
import ProvincesControllers from "../controllers/ProvincesControllers";

const province = Router();

// routing
province.get("/provinces", ProvincesControllers.find);
province.get("/province/:id", ProvincesControllers.findOne);
province.patch("/province/:id", ProvincesControllers.update);
province.post("/province", ProvincesControllers.create);
province.delete("/province/:id", ProvincesControllers.delete);

export default province;
