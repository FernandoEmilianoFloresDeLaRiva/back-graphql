import { GraphQLError } from "graphql";
import { getAuthorsService } from "../../../services/authors/getAuthors.service";

export default async (_root: any, args: any) => {
  try {
    const { pag } = args;
    const res = await getAuthorsService(pag);
    return res;
  } catch (err: any) {
    throw new GraphQLError(err);
  }
};
