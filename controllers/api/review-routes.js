const router = require("express").Router();
const Review = require("../../models/Review");

router.post("/new", async (req, res) => {
  console.log("POST route working ");
  try {
    const newReview = Review.create({
      campground_name: req.body.campground,
      city: req.body.city,
      state: req.body.state,
      amenities: req.body.amenities,
      accessibility: req.body.accessibility,
      price: req.body.price,
      review_text: req.body.reviewText,
      rating: req.body.rating,
      image: req.body.image,
    });

    res.status(200).json(newReview);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
