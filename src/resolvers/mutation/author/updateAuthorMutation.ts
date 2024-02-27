import { GraphQLError } from "graphql";
import { Author } from "../../../entities/author/author.entity";
import { updateAuthorService } from "../../../services/authors/updateAuthor.service";

export const updateAuthor = async (_root: any, args: Author) => {
  try {
    const { id, name, lastName } = args;
    const res = await updateAuthorService(id, { name, lastName });
    return res;
  } catch (err: any) {
    throw new GraphQLError(err);
  }
};
