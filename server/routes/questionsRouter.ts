import express from "express";
import questionsController from "../controllers/questionsController";
const router = express.Router();

//get questions for feed or profile
router.get("/:type", (req, res) => {
  //conditional statement to differentiate feed or profile questions
  //request params to differentiate 
  const { type } = req.params;
  if (type === "feed") {
    // Logic for feed recommendations
    questionsController.getFeedQs;
  } else if (type === "profile") {
    // Logic for profile recommendations
    // api/questions/profile/user_id
    questionsController.getProfileQs;
  } else {
    // Handle invalid type parameter
    res.status(400).json({ error: "Invalid type parameter" });
  }
  res.status(200).json(res.locals);
});

//post question for feed/suggestion page
router.post("/:id", questionsController.postQuestion, (req, res) => {
  res.status(200).json();
});

export default router;
