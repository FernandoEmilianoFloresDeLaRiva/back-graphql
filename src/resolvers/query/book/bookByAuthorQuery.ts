import { GraphQLError } from "graphql";
import { getBookByAuthorService } from "../../../services/books/getBookByAuthor.service";

export default async (_root: any, args: any) => {
  try {
    const { bookName } = args;
    const res = await getBookByAuthorService(bookName);
    console.log(res);
    return res;
  } catch (error: any) {
    throw new GraphQLError(error);
  }
};