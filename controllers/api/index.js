const router = require("express").Router();

const reviewRoutes = require("./review-routes.js");

router.use("/review", reviewRoutes);

module.exports = router;
