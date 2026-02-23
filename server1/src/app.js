const express = require('express');
const mysql = require('./config/db_mysql');
const connectMongo = require('./config/db_mongo');
const router = require('./routes/customer_logic');
const authenticateStaff = require('./middleware/auth_middleware');
const mCrud = require('./routes/mongoCrud');
const sRouter = require('./routes/sell');
const pRouter = require('./routes/product');



require('dotenv').config();

const app = express();
connectMongo();
app.use(express.json());
app.use('/', router);
app.use('/api',router);
app.use('/mongo-crud', mCrud);
app.use('/', sRouter);
app.use('/products', pRouter);

app.get('/test', async (req,res) => {
    try {
        const[rows] = await mysql.query("SELECT 'MySQL Ready' AS status");
        res.json({
            mysql:rows[0].status, mongodb: "connected"
        });
    } catch (error) {
        res.status(500).json({error:"Database Connection Error"});
    }
})
app.listen(process.env.PORT, ()=>{
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});