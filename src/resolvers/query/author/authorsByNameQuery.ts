import { GraphQLError } from "graphql";
import { getAuthorByNameService } from "../../../services/authors/getAuthorByName.service";

export default async (_root: any, args: any) => {
  try {
    const { authorName } = args;
    const res = await getAuthorByNameService(authorName);
    console.log(res);
    return res;
  } catch (error: any) {
    throw new GraphQLError(error);
  }
};
