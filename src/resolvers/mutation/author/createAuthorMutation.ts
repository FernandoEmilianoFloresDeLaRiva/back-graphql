import { GraphQLError } from "graphql";
import { CreateAuthorDto } from "../../../entities/author/createAuthorDTO";
import { createAuthorService } from "../../../services/authors/createAuthor.service";

export const createAuthor = async (_root: any, args: CreateAuthorDto) => {
  try {
    const { name, lastName } = args;
    const res: CreateAuthorDto = await createAuthorService(name, lastName);
    return res;
  } catch (err: any) {
    throw new GraphQLError(err);
  }
};
