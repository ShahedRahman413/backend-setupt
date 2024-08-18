export interface TReview {
    email: string;
    rating: number;
    comment: string;
}

// Define an interface for the Movie
export default interface TMovie {
    title: string;
    description: string;
    releaseDate: Date;
    genre: string;
    isDeleted: boolean;
    viewCount: number;
    reviews: TReview[];

}
