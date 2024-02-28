import { Book } from "../../entities/book/book.entity";
import * as BookRepository from "../../repositories/booksRepository";

export const getBooksService = async (page: number): Promise<Book[]> => {
  try {
    const pageLimit = (page - 1)*5;
    const res = await BookRepository.getBooks(pageLimit);
    return res;
  } catch (err: any) {
    throw new Error(err.message);
  }
};