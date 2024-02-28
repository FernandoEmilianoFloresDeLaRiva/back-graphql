import { Book } from "../../entities/book/book.entity";
import * as BookRepository from "../../repositories/booksRepository";

export const getBookByAuthorService = async (id: number): Promise<Book> => {
  try {
    const res = await BookRepository.getBookByAuthor(id);
    console.log(res)
    return res;
  } catch (err: any) {
    throw new Error(err);
  }
};