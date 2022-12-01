const mongoose = require("mongoose");

const offerSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required: [true, "Please add an description"],
        },
        defaultImage: {
            type: String,
            required: [true, "Please add an image url"],
        },
        carouselImages: {
            type: Array,
            required: [true, "Please add some image urls"],
        },
        price: {
            type: Number,
            required: [true, "Please add the price"],
        },
        title: {
            type: String,
            required: [true, "Please add the title"],
        },
        location: {
            type: String,
            required: [true, "Please add the location"],
        },
        rating: {
            type: Number,
            required: [true, "Please add the location"],
        },
        duration: {
            type: Number,
            required: [true, "Please add the duration"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Offer", offerSchema);