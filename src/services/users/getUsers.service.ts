import { User } from "../../entities/user/user.entity";
import * as userRepository from "../../repositories/usersRepository";

export const getUserService = async (): Promise<User[]> => {
  try {
    const response = await userRepository.getUsers();
    return response;
  } catch (err: any) {
    throw new Error(err);
  }
};
