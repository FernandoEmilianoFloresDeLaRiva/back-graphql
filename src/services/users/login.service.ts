import { User } from "../../entities/user/user.entity";
import * as UserRepository from "../../repositories/usersRepository";
import { comparePassword } from "../../utils/bcrypt/compareCredentials.util";
import { createJwt } from "../../utils/jwt/createJwt.util";

export const loginService = async (
  email: string,
  passwordReq: string
): Promise<string> => {
  try {
    const existingUser: User = await UserRepository.getUserByEmail(email);
    if (!existingUser) throw new Error("User not found");
    const isPasswordValid = comparePassword(existingUser.password, passwordReq);
    if (!isPasswordValid) throw new Error("Credentials are not valid");
    const payload = {
      email,
      url: existingUser.url,
    };
    const jwt = await createJwt(payload);
    return jwt;
  } catch (err: any) {
    throw new Error(err);
  }
};
