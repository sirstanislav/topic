const router = require("express").Router();
const { twitterRequest } = require("../api/twitterApi");

router.post("/", twitterRequest);

module.exports = router;
