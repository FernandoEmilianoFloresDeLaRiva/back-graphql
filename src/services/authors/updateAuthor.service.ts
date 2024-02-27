import { Author } from "../../entities/author/author.entity";
import { UpdateAuthorDto } from "../../entities/author/updateAuthorDTO";
import * as AuthorRepository from "../../repositories/authorsRepository";

export const updateAuthorService = async (
  id: number,
  reqAuthor: UpdateAuthorDto
): Promise<UpdateAuthorDto> => {
  try {
    const originalAuthor: Author = await AuthorRepository.getAuthorById(id);
    if (originalAuthor) {
      const newAuthor: Author = {
        ...originalAuthor,
        ...reqAuthor,
      };
      const { name, lastName } = newAuthor;
      await AuthorRepository.updateAuthor(id, name, lastName);
      return newAuthor;
    }
    throw new Error("Author not found");
  } catch (err: any) {
    throw new Error(err);
  }
};
