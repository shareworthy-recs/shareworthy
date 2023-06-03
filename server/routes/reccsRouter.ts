import express from "express";
import reccsController from "../controllers/recommendationsController";
const router = express.Router();

//get recommendations for feed or profile or profile's saved reccs
router.get("/:type", (req, res) => {
    //request params to differentiate feedreccs or profilereccs or savedReccs
    const { type } = req.params;
    if (type === "feed") {
      // Logic for feed recommendations
      reccsController.getFeedReccs;
    } else if (type === "profile") {
      // Logic for profile recommendations
      // api/recommendations/profile/user_id
      reccsController.getProfileReccs;
    } else {
      // Handle invalid type parameter
      res.status(400).json({ error: "Invalid type parameter" });
    }
  res.status(200).json(res.locals);
});



//post recommendation on feed
router.post("/:id", reccsController.postRecc, (req, res) => {
  console.log('postRecc', res.locals.postedRecc)
  res.status(200).json(res.locals.postedRecc);
});

//update like count on recommendation
router.put("/", (req, res) => {
    //update like count middleware
    //save recc middleware
  res.status(200).json();
});

export default router;
