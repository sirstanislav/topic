const router = require("express").Router();
const { twitterRequest } = require("../api/twitterApi");

router.get("/", twitterRequest);

module.exports = router;
