import * as AuthorsRepository from "../../repositories/authorsRepository";
import { CreateAuthorDto } from "../../typeDefs/entities/createAuthorDTO";

export const createAuthorService = async (
  name: string,
  lastName: string
): Promise<CreateAuthorDto> => {
  try {
    await AuthorsRepository.createAuthor(name, lastName);

    return {
      name,
      lastName,
    };
  } catch (err: any) {
    throw new Error(err);
  }
};
