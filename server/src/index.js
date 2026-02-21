import express from "express";
import route from "./Routes/route.js";
import jsonRoutes from "./Routes/jsonroute.js"

const app = express();

app.use("/", route);
app.use("/json",jsonRoutes);

app.get('/owner', (req, res) =>{
res.json({ owner: "Ramesh Kaka" });
});

app.listen(5001,()=>{
    console.log("🚀Counter Running at port 5001");
});

