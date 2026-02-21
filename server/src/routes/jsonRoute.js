import {Router} from "express";
import { deletejson, getjson, postjson, putjson } from "../controllers/jsoncontroller.js";


const route = Router();
route.get("/",getjson );

route.post("/",postjson );

route.put("/",putjson );

route.delete("/", deletejson);

export default route;