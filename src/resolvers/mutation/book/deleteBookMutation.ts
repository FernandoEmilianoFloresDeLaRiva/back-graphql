import { GraphQLError } from "graphql";
import { deleteBookService } from "../../../services/books/deleteBook.service";

export const deleteBook = async (_root: any, args: any) => {
    try {
      const { id } = args;
      const res = await deleteBookService(id);
      return res;
    } catch (err: any) {
      throw new GraphQLError(err);
    }
  };