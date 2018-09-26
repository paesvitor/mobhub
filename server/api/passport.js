const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const { JWT_SECRET } = require("./config");
const User = require("./models/User");
const LocalStrategy = require("passport-local");

// JWT Strategy
passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromHeader("authorization"),
            secretOrKey: JWT_SECRET
        },
        async (payload, done) => {
            try {
                // Find the users specified in token
                const user = await User.findById(payload.sub);
                // If user doesn't exists, handle it
                if (!user) {
                    return done(null, false);
                }
                // Otherwise, return user
                done(null, user);
            } catch (error) {
                done(error, false);
            }
        }
    )
);

// Local Strategy
passport.use(
    new LocalStrategy(
        {
            usernameField: "email"
        },
        async (email, password, done) => {
            try {
                // Find the user given the email
                const user = await User.findOne({ email });
                // If not, handle it
                if (!user) {
                    return done(null, false, {
                        message: "This user does not exists"
                    });
                }
                // Check if password is correct
                const isValidPassword = await user.isValidPassword(password);
                if (!isValidPassword) {
                    return done(null, false);
                }
                // Then, return user
                done(null, user);
            } catch (error) {
                done(error, false);
            }
        }
    )
);
