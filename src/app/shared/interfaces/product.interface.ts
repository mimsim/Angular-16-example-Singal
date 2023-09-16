import { IRating } from "./rating.interface";


export interface IProduct {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
    rating: IRating;
  }