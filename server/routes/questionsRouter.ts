import express from "express";
const router = express.Router();

//get questions for feed or profile
router.get("/", (req, res) => {
  //conditional statement to differentiate feed or profile questions
  res.status(200).json();
});

//post question for feed
router.post("/", (req, res) => {
  res.status(200).json();
});

export default router;
