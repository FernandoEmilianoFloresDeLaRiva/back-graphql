import { Book } from "../../entities/book/book.entity";
import * as BooksRepository from "../../repositories/booksRepository";

export const getBookByNameService = async (name: string): Promise<Book> => {
  try {
    const res = await BooksRepository.getBookByName(name);
    console.log(res)
    return res;
  } catch (err: any) {
    throw new Error(err);
  }
};