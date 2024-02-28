import { GraphQLError } from "graphql";
import { getUserService } from "../../../services/users/getUsers.service";

export default async (_root: any, args: any) => {
  try {
    const res = await getUserService();
    return res;
  } catch (err: any) {
    throw new GraphQLError(err);
  }
};
