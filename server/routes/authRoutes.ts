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

//something jake added from his old code
// router.get(
//   '/google/callback',
//   passport.authenticate('google', { failureRedirect: '/' }),
//   (req: Request, res: Response) => {
//     res.redirect('localhost:8080');
//   }
// );

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: 'http://localhost:8080/login/failed',
  }), (req,res)=>{
    console.log('Oauthentication success!')
  }
);
export default router;
