import { GraphQLError } from "graphql";
import { getBookByAuthorService } from "../../../services/books/getBookByAuthor.service";

export default async (_root: any, args: any) => {
  try {
    const { idAuthor } = args;
    const res = await getBookByAuthorService(idAuthor);
    console.log(res);
    return res;
  } catch (error: any) {
    console.error(error);
    throw new GraphQLError(error);
  }
};
