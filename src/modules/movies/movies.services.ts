import TMovie from "./movies.interface";
import { Movie } from "./movies.model";

const createMovie = async (payLoad: TMovie) => {
    const result = await Movie.create(payLoad)
    return result
}

export const MovieServices = {
    createMovie
}