import passport from 'passport';
import {
  Strategy as GoogleStrategy,
  Profile as GoogleProfile,
  VerifyCallback as GoogleVerifyCallback,
} from 'passport-google-oauth20';
import authModel from './models/authModel';
import dotenv from 'dotenv';

dotenv.config();

// Serialize persists user.id into session
// passport.serializeUser((user, done) => {
//   console.log('userid--->', user.id;
//   done(null, user.id);
// });

// // Deserialize will retrieve user data from session
// passport.deserializeUser((id, done) => {
//   console.log({ id });

//   authModel.findByPk(id).then((user) => {
//     console.log('user--->', user);
//     done(null, user);
//   });
// });

export const initializeGoogleStrategy = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        callbackURL: 'http://localhost:3000/auth/google/callback',
      },
      async function (
        accessToken: string,
        refreshToken: string,
        profile: GoogleProfile,
        done: GoogleVerifyCallback
      ) {
        console.log('IN THE ASYNC FUNCTION');
        const { id, displayName, photos, emails } = profile;

        const newUser = {
          username: displayName,
          avatar: photos?.[0].value,
          name: displayName,
          email: emails?.[0].value,
          userId: id,
        };

        console.log('NEW USER', newUser);
        return done(null, newUser);
      }
    )
  );
};

export const initializeUserSerialization = () => {
  // req.user => cookie
  passport.serializeUser(function (user, done) {
    console.log('serializing user:', user);
    done(null, user);
  });

  // cookie => req.user
  passport.deserializeUser(function (user: any, done) {
    console.log('deserializing user:', user);
    done(null, user);
  });
};

/*
import UserModel from './models/UserModel';
import bcrypt from 'bcrypt';

export const initializeGoogleStrategy = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_SECRET || '',
        callbackURL: 'http://localhost:8080/oauth/google/callback',
      },
      function (
        accessToken: any,
        refreshToken: any,
        profile: GoogleProfile,
        done: GoogleVerifyCallback
      ) {
        const { id, displayName, photos, emails } = profile;

        const user = UserModel.findOne({ email: emails?.[0].value });
        if (!user) {
          const newUser = new UserModel({
            username: displayName,
            avatar: photos?.[0].value,
            name: displayName,
            email: emails?.[0].value,
            userId: id,
          });
          newUser.save();
          return done(null, newUser);
        }
        return done(null, user);
      }
    )
  );
};

*/
