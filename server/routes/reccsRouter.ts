import express from "express";
import reccsController from "../controllers/recommendationsController";
const router = express.Router();

//get recommendations for feed or profile or profile's saved reccs
router.get("/:type", (req, res) => {
    //request params to differentiate feedreccs or profilereccs or savedReccs
    const { type } = req.params;
    if (type === "feed") {
      // Logic for feed recommendations
      reccsController.getFeed;
    } else if (type === "profile") {
      // Logic for profile recommendations
      reccsController.getProfile;
    } else if (type === "saved") {
      // Logic for profile's saved recommendations
      reccsController.getSaved;
    } else {
      // Handle invalid type parameter
      res.status(400).json({ error: "Invalid type parameter" });
    }
  res.status(200).json(res.locals.reccs);
});

//post recommendation on feed
router.post("/", (req, res) => {
  res.status(200).json();
});

//update like count on recommendation
router.put("/", (req, res) => {
    //update like count middleware
    //save recc middleware
  res.status(200).json();
});

export default router;
