import { CreateBookDto } from "../../entities/book/createBookDTO";
import { GetBook } from "../../entities/book/getBookDTO";
import { getAuthorById } from "../../repositories/authorsRepository";
import * as BookRepository from "../../repositories/booksRepository";
import { asignAuthorToBook } from "../../utils/bookUtils/asignAuthorToBook";

export const createBookService = async (
  title: string,
  author: number,
  stock: number
): Promise<GetBook> => {
  try {
    await BookRepository.createBook(title, author, stock);
    const book = await BookRepository.getBookByName(title);
    const res = asignAuthorToBook(book);
    return res;
  } catch (err: any) {
    throw new Error(err);
  }
};
