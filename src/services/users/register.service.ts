import * as userRepository from "../../repositories/usersRepository";
import { createPasswordHash } from "../../utils/bcrypt/createPasswordHash.util";
import { createJwt } from "../../utils/jwt/createJwt.util";

export const registerService = async (
  email: string,
  password: string,
  url: string
): Promise<string> => {
  try {
    const existingUser = await userRepository.getUserByEmail(email);
    if (!existingUser) {
      const passwordHash = await createPasswordHash(password);
      await userRepository.createUser(email, passwordHash, url);
      const payload = {
        email,
        url,
      };
      const token = await createJwt(payload);
      return token;
    }
    throw new Error("User already exists");
  } catch (err: any) {
    throw new Error(err);
  }
};
