import { GraphQLError } from "graphql";
import { CreateBookDto } from "../../../entities/book/createBookDTO";
import { createBookService } from "../../../services/books/createBook.service";

export const createBook = async (_root: any, args: any) => {
  try {
    const { title, author, stock } = args;
    const res: CreateBookDto = await createBookService(title, author, stock);
    return res;
  } catch (error : any) {
    throw new GraphQLError(error);
  }
};
