import express from "express";
import { getMessage } from "../controllers.js/jsonController.js";

const route = express.Router();
route.get("/",getMessage );

export default route;