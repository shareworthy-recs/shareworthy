import express from "express";
const router = express.Router();

//get recommendations for feed or profile or profile's saved reccs
router.get("/", {}, (req, res) => {
    //conditional statement to differentiate feed or profile reccs or savedReccs
  res.status(200).json();
});

//post recommendation on feed
router.post("/", {}, (req, res) => {
  res.status(200).json();
});

//update like count on recommendation
router.put("/", {}, (req, res) => {
    //update like count middleware
    //save recc middleware
  res.status(200).json();
});

export default router;
