import { db } from "../config/db";
import { Author } from "../entities/author.entity";

export const getAuthors = async (limit: number): Promise<Author[]> => {
  try {
    const query = `select * from authors limit ${limit}, 5`;
    const result = await db.execute(query);
    return result[0] as Author[];
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getAuthorByName = async (name: string): Promise<Author> => {
  try {
    const query = "select * from authors where name = ?";
    const result = await db.execute(query, [name]);
    return result[0] as unknown as Author;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const createAuthor = async (
  name: string,
  lastName: string
): Promise<void> => {
  try {
    const query = "insert into authors (name, lastName) values (?.?)";
    await db.execute(query, [name, lastName]);
  } catch (err: any) {
    throw new Error(err);
  }
};

export const updateAuthor = async (
  id: number,
  name: string,
  lastName: string
): Promise<void> => {
  try {
    const query = "update authors set name = ?, lastName = ? where id = ?";
    await db.execute(query, [name, lastName, id]);
  } catch (err: any) {
    throw new Error(err);
  }
};

export const deleteAuthor = async (id: number): Promise<void> => {
  try {
    const query = "delete from authors where id = ?";
    await db.execute(query, [id]);
  } catch (err: any) {
    throw new Error(err);
  }
};
