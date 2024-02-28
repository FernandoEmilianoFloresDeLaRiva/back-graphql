import { db } from "../config/db";
import { Book } from "../entities/book/book.entity";

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
    const result : any = await db.execute(query, [name]);
    return result[0][0] as Book;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getBookById = async (id: number): Promise<Book> => {
  try {
    const query = "select * from books where id = ?";
    const result : any = await db.execute(query, [id]);
    return result[0][0] as Book;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getBooksByAuthor = async (author: number): Promise<Book[]> => {
  try {
    const query = "select * from books where author = ?";
    const result : any = await db.execute(query, [author]);
    return result[0] as Book[];
  } catch (err: any) {
    throw new Error(err);
  }
};

export const createBook = async (
  title: string,
  author: number,
  stock: number
): Promise<void> => {
  try {
    const query = "insert into books (title, author, stock) values (?, ?, ?)";
    await db.execute(query, [title, author, stock]);
  } catch (err: any) {
    throw new Error(err);
  }
};

export const updateBook = async (
  id: number,
  title: string,
  author: number,
  stock: number
): Promise<void> => {
  try {
    const query =
      "update books set author = ?, stock = ?, title = ? where id = ?";
    await db.execute(query, [author, stock, title, id]);
  } catch (err: any) {
    throw new Error(err);
  }
};

export const deleteBook = async (id: number): Promise<void> => {
  try {
    const query = "delete from books where id = ?";
    await db.execute(query, [id]);
  } catch (err: any) {
    throw new Error(err);
  }
};

export const deleteBookByAuthor = async (id: number): Promise<void> => {
  try {
    const query = "delete from books where author = ?";
    await db.execute(query, [id]);
  } catch (err: any) {
    throw new Error(err);
  }
};
