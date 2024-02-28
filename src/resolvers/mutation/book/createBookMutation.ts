import { GraphQLError } from "graphql";
import { CreateBookDto } from "../../../entities/book/createBookDTO";
import { createBookService } from "../../../services/books/createBook.service";
import { Book } from "../../../entities/book/book.entity";
import { getBookById, getBookByName } from "../../../repositories/booksRepository";
import { GetBook } from "../../../entities/book/getBookDTO";

export const createBook = async (_root: any, args: any) => {
  try {
    const { title, author, stock } = args;
    const res: GetBook = await createBookService(title, author, stock);
    return res;
  } catch (error : any) {
    throw new GraphQLError(error);
  }
};
