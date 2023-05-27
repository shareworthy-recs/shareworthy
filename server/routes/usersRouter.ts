import express from "express";
const router = express.Router();
import usersController from '../controllers/usersController';

//signup
router.post("/signup", usersController.signUp, (req, res) => {
  res.status(200).send('new user created');
});

//login
router.post("/login", (req, res) => {
  res.status(200).json(res.locals);
});

//logout
router.post("/logout", (req, res) => {
  // log out and terminate session
//   req.session.destroy((err) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("Error logging out");
//     } else {
//       res.clearCookie("connect.sid"); // clear the cookie
//       res.status(200).send("Logged out successfully");
//     }
//   });
});

export default router;
