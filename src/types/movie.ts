import { Genre } from "./genre";
import { Review } from "./review";

export type Move = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    gente: Genre[];
    reviews: Review[];
}