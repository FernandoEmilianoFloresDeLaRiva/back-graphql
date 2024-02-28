
import { GetBook } from "../../entities/book/getBookDTO";
import * as BookRepository from "../../repositories/booksRepository";
import { asignAuthorToBook } from "../../utils/bookUtils/asignAuthorToBook";

export const deleteBookService = async (id: number): Promise<GetBook> => {
  try {
    const book = await BookRepository.getBookById(id);
    if (book) {
      const deletedBook = asignAuthorToBook(book);
      await BookRepository.deleteBook(id);
      return deletedBook;
    }
    throw new Error("Book not found");
  } catch (err: any) {
    throw new Error(err);
  }
};
