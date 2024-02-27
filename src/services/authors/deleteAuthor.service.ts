import * as AuthorRepository from "../../repositories/authorsRepository";
import { Author } from "../../entities/author/author.entity";

export const deleteAuthorService = async (id: number): Promise<Author> => {
  try {
    const user: Author = await AuthorRepository.getAuthorById(id);
    if (user) {
      await AuthorRepository.deleteAuthor(id);
      return user;
    }
    throw new Error("Author not found");
  } catch (err: any) {
    throw new Error(err);
  }
};
