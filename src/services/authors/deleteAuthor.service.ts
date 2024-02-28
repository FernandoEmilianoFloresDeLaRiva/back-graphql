import * as AuthorRepository from "../../repositories/authorsRepository";
import { Author } from "../../entities/author/author.entity";
import { getAllUsersUrlService } from "../users/getUsersUrl.service";
import { notifyUser } from "../../api/notifyUser";

export const deleteAuthorService = async (id: number): Promise<Author> => {
  try {
    const user: Author = await AuthorRepository.getAuthorById(id);
    if (user) {
      await AuthorRepository.deleteAuthor(id);
      const allUrls = await getAllUsersUrlService();
      if (allUrls.length) {
        allUrls.forEach(({url}) => {
          if(url !== null) notifyUser(user, url, "delete-author");
        });
      }
      return user;
    }
    throw new Error("Author not found");
  } catch (err: any) {
    throw new Error(err);
  }
};
