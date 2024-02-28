import { GraphQLError } from "graphql";
import { CreateUserDto } from "../../../entities/user/createUserDTO";
import { registerService } from "../../../services/users/register.service";

export const createUser = async (_root: any, args: CreateUserDto) => {
  try {
    const { email, urlWebHook, password } = args;
    const token = await registerService(email, password, urlWebHook);
    return token;
  } catch (err: any) {
    throw new GraphQLError(err);
  }
};
