import { GraphQLError } from "graphql";
import { Author } from "../../../entities/author/author.entity";
import { getAuthorById } from "../../../repositories/authorsRepository";
import { getBookByNameService } from "../../../services/books/getBookByName.service";

export default async (_root: any, args: any) => {
  try {
    const { bookName } = args;
    const res = await getBookByNameService(bookName);
    return res;
  } catch (error: any) {
    throw new GraphQLError(error);
  }
};
