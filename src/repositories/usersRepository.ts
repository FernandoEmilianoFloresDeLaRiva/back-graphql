import { db } from "../config/db";
import { User } from "../entities/user/user.entity";

export const getUserByEmail = async (email: string): Promise<User> => {
  try {
    const query = "select * from users where email = ?";
    const result = await db.execute(query, [email]);
    return result[0] as unknown as User;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const createUser = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    const query = "insert into users (email, password, url) values (?, ?, ?)";
    await db.execute(query, [email, password]);
  } catch (err: any) {
    throw new Error(err);
  }
};
