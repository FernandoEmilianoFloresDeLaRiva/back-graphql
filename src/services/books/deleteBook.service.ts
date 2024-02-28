import { Book } from "../../entities/book/book.entity";
import * as BookRepository from "../../repositories/booksRepository";

export const deleteBookService = async (id: number): Promise<Book> => {
  try {
    const book = await BookRepository.getBookById(id);
    if (book) {
      await BookRepository.deleteBook(id);
      return book;
    }
    throw new Error("Book not found");
  } catch (err: any) {
    throw new Error(err);
  }
};
