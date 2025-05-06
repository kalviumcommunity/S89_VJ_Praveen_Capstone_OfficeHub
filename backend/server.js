const express  = require("express")
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

app.get("/",(req,res)=>{
    res.send("this is backend")
})

const portfolioRouter = require("./controllers/portfolioRouter");
const resumeRouter = require("./controllers/resumeRouter");
const storeRouter = require("./controllers/storeRouter");   
const userRouter = require("./controllers/userRouter");
const cartRouter = require("./controllers/cartRouter");
const productRouter = require("./controllers/productRouter");

app.use("/product",productRouter);

app.use("/portfolio",portfolioRouter);
app.use("/resume",resumeRouter);
app.use("/store",storeRouter);
app.use("/user",userRouter);
app.use("/cart",cartRouter);



app.listen(3000,async()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Server connected successfully")
    } catch (error) {
        console.log("Something went wrong",error);
    }
})