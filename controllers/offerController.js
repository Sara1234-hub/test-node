const asyncHandler = require("express-async-handler");

const Offer = require("../models/offerModel");

// @desc    Get Offers
// @route   GET /api/offers
// @access  Public
const getOffers = asyncHandler(async (req, res) => {
    const offers = await Offer.find();
    res.status(200).json(offers);
});

// @desc    Set Offer
// @route   POST /api/offers
// @access  Private
const setOffer = asyncHandler(async (req, res) => {
    const {
        description,
        defaultImage,
        carouselImages,
        price,
        title,
        location,
        rating,
        duration,
    } = req.body;

    if (
        !title ||
        !description ||
        !defaultImage ||
        !carouselImages ||
        !price ||
        !location ||
        !rating ||
        !duration
    ) {
        res.status(400);
        throw new Error("Please fill all fields");
    }

    const offer = await Offer.create({
        description,
        defaultImage,
        carouselImages,
        price,
        title,
        location,
        rating,
        duration
    });

    res.status(200).json(offer);
});

// @desc    Update Offer
// @route   PUT /api/offers/:id
// @access  Private
const updateOffer = asyncHandler(async (req, res) => {
    const offer = await Offer.findById(req.params.id);

    if (!offer) {
        res.status(400);
        throw new Error("Tour package not found");
    }
    const updatedOffer = await Offer.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedOffer);
});

// @desc    Delete Offer
// @route   DELETE /api/offers/:id
// @access  Private
const deleteOffer = asyncHandler(async (req, res) => {
    const offer = await Offer.findById(req.params.id);

    if (!offer) {
        res.status(400);
        throw new Error("Tour package not found.");
    }

    const deletedOffer = await Offer.deleteOne({
        _id: req.params.id,
    });

    res.status(200).json(deletedOffer);
});

module.exports = { getOffers, setOffer, updateOffer, deleteOffer };