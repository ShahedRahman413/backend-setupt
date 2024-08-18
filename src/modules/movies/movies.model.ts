import { model, Schema } from "mongoose";
import TMovie, { TReview } from "./movies.interface";

const reviewSchema = new Schema<TReview>({
    email: { type: String, require: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }

})

export const movieSchema = new Schema<TMovie>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    genre: { type: String, required: true },
    reviews: [reviewSchema],
    viewCount: { type: Number, default: 0 }
})

export const Movie = model<TMovie>("Movie", movieSchema
)