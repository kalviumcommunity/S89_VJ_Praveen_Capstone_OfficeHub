const express  = require("express")
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const portfolioRouter = require("./controllers/portfolioRouter");
const resumeRouter = require("./controllers/resumeRouter");
const storeRouter = require("./controllers/storeRouter");

app.use("/portfolio",portfolioRouter);
app.use("/resume",resumeRouter);
app.use("/store",storeRouter);


