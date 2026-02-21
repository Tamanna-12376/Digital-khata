import express from "express";
import { getmessage } from "../controllers/controller.js";

const route = express.Router();
route.get("/", getmessage);

export default route;