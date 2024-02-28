import { GraphQLError } from "graphql";
import { CreateLoginDto } from "../../../entities/user/createLoginDTO";
import { loginService } from "../../../services/users/login.service";

export const loginUser = async (_root: any, args: CreateLoginDto) => {
  try {
    const { email, password } = args;
    const token = await loginService(email, password);
    return token;
  } catch (err: any) {
    throw new GraphQLError(err);
  }
};
