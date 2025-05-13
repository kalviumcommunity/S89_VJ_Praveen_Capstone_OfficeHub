const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/userSchema'); // Adjust the path as needed

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: ['profile', 'email']
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Check if user already exists in our database
      let user = await User.findOne({ googleId: profile.id });

      if (user) {
        // If user exists, return the user
        return done(null, user);
      } else {
        // If user doesn't exist, create a new user
        const newUser = new User({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          // You can add more fields here as needed
        });

        await newUser.save();
        return done(null, newUser);
      }
    } catch (error) {
      return done(error, null);
    }
  }
));

module.exports = passport;