import { Router } from 'express';
import passport from 'passport';
const router = Router();

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);