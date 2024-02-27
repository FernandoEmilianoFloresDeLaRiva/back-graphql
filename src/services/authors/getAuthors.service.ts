import { Author } from "../../entities/author/author.entity";
import * as AuthorsRepository from "../../repositories/authorsRepository";

export const getAuthorsService = async (page: number): Promise<Author[]> => {
  try {
    const pageLimit = page - 1 * 5;
    const res = await AuthorsRepository.getAuthors(pageLimit);
    return res;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
