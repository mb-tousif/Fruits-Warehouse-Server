import review from "../Model/reviewSchema.js";

export const getReviews = async (req, res) => {
    try {
        const reviews = await review.find({});
        res.status(200).json(reviews) 
    } catch (error) {
        res.status(2500).json({message : error.message}) 
    }
};
