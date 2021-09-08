const router = require("express").Router();
const Review = require("../models/Review");

router.get("/", async (req, res) => {
  console.log("Got this far");
  try {
    const dbReviewData = await Review.findAll({
      attributes: [
        "id",
        "campground_name",
        "city",
        "description",
        "accessibility",
        "price",
        "review_text",
        "rating",
      ],
    });
    res.status(200).json(dbReviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post("/", (req, res))

// router.get("/", withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ["password"] },
//       order: [["name", "ASC"]],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render("homepage", {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
