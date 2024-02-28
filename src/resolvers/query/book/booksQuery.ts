import { GraphQLError } from "graphql";
import { getBooksService } from "../../../services/books/getBooks.service";
export default async (_root: any, args: any) => {
  try {
    const { pag } = args;
    const res = await getBooksService(pag);
    return res;
  } catch (err: any) {
    throw new GraphQLError(err);
  }
};
