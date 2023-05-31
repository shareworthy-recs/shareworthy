import { Router } from 'express';
import passport from 'passport';
const router = Router();

const CLIENT_URL = 'http://localhost:3000/#/dashboard';

// Google Auth Router
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed',
  }),
);