var express = require("express");
var router = express.Router();
// require  controller files
var ctrlLocations = require("../controllers/locations");
var ctrlOthers = require("../controllers/others");

/* locations pages. */
router.get("/", ctrlLocations.homelist);
router.get("/location", ctrlLocations.locationInfo);
router.get("/location/reviw/new", ctrlLocations.addReview);

/*Other pages */
router.get("/about", ctrlOthers.about);

module.exports = router;
