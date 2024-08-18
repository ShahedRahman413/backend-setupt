import express, { Request, Response } from "express"
import { Movie } from "./movies.model";


const router = express.Router()
router.post('/', async (req: Request, res: Response) => {
    console.log(req.body);
    const result = await Movie.create(req.body)

    res.json({
        success: true,
        message: "Movie created successfully",
        data: result
    })

})



export const MovieRoutes = router;