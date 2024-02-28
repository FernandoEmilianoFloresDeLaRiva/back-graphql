import { UpdateBookDTO } from "../../entities/book/updateBookDTO";
import * as BookRepository from "../../repositories/booksRepository";
import { Book } from "../../entities/book/book.entity";
import { GetBook } from "../../entities/book/getBookDTO";
import { asignAuthorToBook } from "../../utils/bookUtils/asignAuthorToBook";

export const updateBookService = async (
  id: number,
  updateBook: UpdateBookDTO
): Promise<GetBook> => {
  try {
    const originalBook: Book = await BookRepository.getBookById(id);
    if (originalBook) {
      const newBook: Book = {
        ...originalBook,
        ...updateBook,
      };
    const { id, title, author, stock } = newBook;
    await BookRepository.updateBook(id, title, author, stock);
    const res = asignAuthorToBook(newBook);
    return res;
    }
    throw new Error("Author not found");
  } catch (error: any) {
    throw new Error(error);
  }
};
