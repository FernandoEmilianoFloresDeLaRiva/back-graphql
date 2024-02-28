import { Author } from "../../entities/author/author.entity";
import { GetBook } from "../../entities/book/getBookDTO";
import { getAuthorById } from "../../repositories/authorsRepository";
import * as BookRepository from "../../repositories/booksRepository";
import { asignAuthorToBook } from "../../utils/bookUtils/asignAuthorToBook";

export const getBooksService = async (page: number): Promise<GetBook[]> => {
  try {
    const pageLimit = (page - 1) * 5;
    const res = await BookRepository.getBooks(pageLimit);
    const finalResult: GetBook[] = [];
    for (let i = 0; i < res.length; i++) {
      const book = res[i];
      const newBook = await asignAuthorToBook(book);
      finalResult.push({
        ...newBook,
      });
    }
    return finalResult;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
