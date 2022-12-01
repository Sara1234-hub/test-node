const express = require("express");
const router = express.Router();
const {
    getOffers,
    setOffer,
    updateOffer,
    deleteOffer
} = require("../controllers/offerController");

router.route("/").get(getOffers).post(setOffer);
router.route("/:id").put(updateOffer).delete(deleteOffer);

module.exports = router;