import { GraphQLError } from "graphql";
import { updateBookService } from "../../../services/books/updateBook.service";
import { Book } from "../../../entities/book/book.entity";

export const updateBook = async (_root: any, args: Book) => {
  try {
    const { id, title, author, stock } = args;
    const res = await updateBookService(id, { title, author, stock });
    return res;
  } catch (error: any) {
    throw new GraphQLError(error);
  }
};
