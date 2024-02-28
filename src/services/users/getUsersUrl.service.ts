import * as userRepository from "../../repositories/usersRepository";

export const getAllUsersUrlService = async (): Promise<{url : string}[]> => {
  try {
    const response = await userRepository.getAllUsersUrl();
    return response;
  } catch (err: any) {
    throw new Error(err);
  }
};
