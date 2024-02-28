import { CreateBookDto } from "../../entities/book/createBookDTO";
import * as BookRepository from "../../repositories/booksRepository";

export const createBookService = async (
  title: string,
  author: number,
  stock: number
): Promise<CreateBookDto> => {
  try {
    await BookRepository.createBook(title, author, stock);
    return {
      title,
      author,
      stock,
    };
  } catch (err: any) {
    throw new Error(err);
  }
};
