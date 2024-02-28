import { Author } from "../../entities/author/author.entity";
import { Book } from "../../entities/book/book.entity";
import { GetBook } from "../../entities/book/getBookDTO";
import { getAuthorById } from "../../repositories/authorsRepository";
import * as BooksRepository from "../../repositories/booksRepository";
import { asignAuthorToBook } from "../../utils/bookUtils/asignAuthorToBook";

export const getBookByNameService = async (name: string): Promise<GetBook> => {
  try {
    const res = await BooksRepository.getBookByName(name);
    const finalRes = asignAuthorToBook(res);
    return finalRes;
  } catch (err: any) {
    throw new Error(err);
  }
};