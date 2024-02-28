import { GetBook } from "../../entities/book/getBookDTO";
import * as BookRepository from "../../repositories/booksRepository";
import { asignAuthorToBook } from "../../utils/bookUtils/asignAuthorToBook";

export const getBookByAuthorService = async (id: number): Promise<GetBook[]> => {
  try {
    const res = await BookRepository.getBooksByAuthor(id);
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
    throw new Error(err);
  }
};
