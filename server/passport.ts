import passport from 'passport';
import {
  Strategy as GoogleStrategy,
  Profile as GoogleProfile,
  VerifyCallback as GoogleVerifyCallback,
} from 'passport-google-oauth20';
import {
  Strategy as GitHubStrategy,
  Profile as GitHubProfile,
} from 'passport-github2';

import authModel from './models/authModel';
import dotenv from 'dotenv';

dotenv.config();

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

export const initializeGithubStrategy = () => {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID || '',
        clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
        callbackURL: 'http://localhost:3000/auth/github/callback',
      },
      async function (
        accessToken: string,
        refreshToken: string,
        profile: GitHubProfile,
        done: any
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