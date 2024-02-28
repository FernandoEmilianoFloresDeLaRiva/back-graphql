import { Author } from "../author/author.entity";

export interface GetBook {
    id: number;
    title: string;
    author: Author;
    stock: number;
  }