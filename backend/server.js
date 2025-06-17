const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors({ origin: ['http://localhost:5173', 'https://officehub1.netlify.app'], credentials: true }));
app.use(express.json());

const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_session_secret',
  resave: false,
  saveUninitialized: false
}));

// Passport configuration
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://s89-vj-praveen-capstone-officehub-6.onrender.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // Here you would find or create a user in your database
    // For now, we'll just pass the profile info
    return cb(null, profile);
  }
));

// Serialize and Deserialize User
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("this is backend");
});

// Importing routers
const portfolioRouter = require("./controllers/portfolioRouter");
const resumeRouter = require("./controllers/resumeRouter");
const storeRouter = require("./controllers/storeRouter");   
const userRouter = require("./controllers/userRouter");
const cartRouter = require("./controllers/cartRouter");
const productRouter = require("./controllers/productRouter");
const authRoutes = require("./routes/authRoutes");
const watchRouter = require("./controllers/watchRouter");
const laptopRouter = require("./controllers/laptopRouter");
const perfumeRouter = require("./controllers/perfumeRouter");
const shoeRouter = require("./controllers/shoeRouter");
const Drouter = require("./controllers/Drouter");
const Accessoryrouter = require("./controllers/Accessoryrouter");
const Stationaryrouter = require("./controllers/Stationaryrouter");


app.use("/product", productRouter);
app.use("/portfolio", portfolioRouter);
app.use("/resume", resumeRouter);
app.use("/store", storeRouter);
app.use("/user", userRouter);
app.use("/cart", cartRouter);
app.use("/auth", authRoutes);
app.use("/watche", watchRouter);
app.use("/laptop",laptopRouter);
app.use("/shoe", shoeRouter);
app.use("/perfume", perfumeRouter);
app.use("/devices", Drouter);
app.use("/stationary", Stationaryrouter);
app.use("/accessory", Accessoryrouter);


// Google Auth Routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('https://officehub1.netlify.app/home');
  });



app.listen(PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Server connected successfully on port", PORT);
  } catch (error) {
    console.log("Something went wrong", error);
  }
});
