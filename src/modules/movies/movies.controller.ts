import { Request, Response } from "express"
import { MovieServices } from "./movies.services"

const createMovie = async (req: Request, res: Response) => {
    const result = await MovieServices.createMovie(req.body)


    res.json({
        success: true,
        message: "Movie created successfully",
        data: result
    })

}
export const MovieController = {
    createMovie
}