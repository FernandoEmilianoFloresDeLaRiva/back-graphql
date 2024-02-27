import { GraphQLError } from "graphql";
import { deleteAuthorService } from "../../../services/authors/deleteAuthor.service";

export const deleteAuthor = async (_root: any, args: any) => {
  try {
    const { id } = args;
    const res = await deleteAuthorService(id);
    return res;
  } catch (err: any) {
    throw new GraphQLError(err);
  }
};
