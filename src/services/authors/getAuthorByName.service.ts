import { Author } from "../../entities/author/author.entity";
import * as AuthorsRepository from "../../repositories/authorsRepository";

export const getAuthorByNameService = async (name: string): Promise<Author> => {
  try {
    const res = await AuthorsRepository.getAuthorByName(name);
    console.log(res)
    return res;
  } catch (err: any) {
    throw new Error(err);
  }
};
