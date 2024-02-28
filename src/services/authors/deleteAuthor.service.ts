import * as AuthorRepository from "../../repositories/authorsRepository";
import * as BookRepository from "../../repositories/booksRepository";
import { Author } from "../../entities/author/author.entity";
import { getAllUsersUrlService } from "../users/getUsersUrl.service";
import { notifyUser } from "../../api/notifyUser";

export const deleteAuthorService = async (id: number): Promise<Author> => {
  try {
    const author: Author = await AuthorRepository.getAuthorById(id);
    if (author) {
      await BookRepository.deleteBookByAuthor(id);
      await AuthorRepository.deleteAuthor(id);
      const allUrls = await getAllUsersUrlService();
      if (allUrls.length) {
        allUrls.forEach(({ url }) => {
          if (url !== null) notifyUser(author, url, "delete-author");
        });
      }
      return author;
    }
    throw new Error("Author not found");
  } catch (err: any) {
    throw new Error(err);
  }
};
