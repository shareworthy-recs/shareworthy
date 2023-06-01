import { Router } from 'express';
import passport from 'passport';
const router = Router();

const CLIENT_URL = 'http://localhost:8080/#/dashboard';

//auth login
router.get('/login', (req, res) => {
  res.render('login');
});

//auth logout 
router.get('/logout', (req, res) => {
  //handle with passport 
  res.send('logging out');
})

// Google Auth Router
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

export default router;