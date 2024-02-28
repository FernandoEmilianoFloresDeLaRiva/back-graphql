import { GraphQLError } from "graphql";
import { getBookByNameService } from "../../../services/books/getBookByName.service";

export default async (_root: any, args: any) => {
  try {
    const { idAuthor } = args;
    const res = await getBookByNameService(idAuthor);
    console.log(res);
    return res;
  } catch (error: any) {
    throw new GraphQLError(error);
  }
};