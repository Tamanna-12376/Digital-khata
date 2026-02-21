import express from "express";
import route from "./routes/route.js";
import jsonRoute from "./routes/jsonRoute.js"

const apple = express();

apple.use("/", route);
apple.use("/json",jsonRoute);
apple.listen(5001,()=>{
    console.log("🚀Counter Running at port 5001");
});