const express = require("express");
const router = express.Router();

const { merojobscontrol } = require("../controllers/testController");

router.route("/test").get(merojobscontrol);

module.exports = router;
