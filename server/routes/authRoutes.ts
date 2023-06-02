import { Router, Request, Response } from 'express';
import passport from 'passport';
const router = Router();

const CLIENT_URL = 'http://localhost:8080/';

//auth login
router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});

//auth logout
router.get('/logout', (req, res) => {
  //handle with passport
  res.send('logging out');
});

// Google Auth Router
router.get(
  '/google',
  (req, res, next) => {
    console.log('hitting this route!');
    next();
  },
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: 'http://localhost:8080/auth/login/failed',
  }),
  (req, res) => {
    console.log('Oauthentication success!');
  }
);

// Github Auth Router
router.get(
  '/github',
  (req, res, next) => {
    console.log('hitting this route!');
    next();
  },
  passport.authenticate('github', {
    scope: ['profile', 'email'],
  })
);

router.get(
  '/github/callback',
  passport.authenticate('github', {
    successRedirect: CLIENT_URL,
    failureRedirect: 'http://localhost:8080/auth/login/failed',
  }),
  (req, res) => {
    console.log('Oauthentication success!');
  }
);
export default router;
