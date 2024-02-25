import { db } from "../config/db";
import { Book } from "../entities/book.entity";

export const getBooks = async (limit: number): Promise<Book[]> => {
  try {
    const query = `select * from books limit ${limit}, 5`;
    const result = await db.execute(query);
    return result[0] as Book[];
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getBookByName = async (name: string): Promise<Book> => {
  try {
    const query = "select * from books where title = ?";
    const result = await db.execute(query, [name]);
    return result[0] as unknown as Book;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getBookByAuthor = async (author: string): Promise<Book> => {
  try {
    const query = "select * from books where author = ?";
    const result = await db.execute(query, [author]);
    return result[0] as unknown as Book;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const createBook = async (
  title: string,
  author: string,
  stock: number
): Promise<void> => {
  try {
    const query = "insert into books (title, author, stock) values (?, ?, ?)";
    await db.execute(query, [title, author, stock]);
  } catch (err: any) {
    throw new Error(err);
  }
};
