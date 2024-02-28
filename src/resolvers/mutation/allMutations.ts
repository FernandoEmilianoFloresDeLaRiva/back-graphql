import { createAuthor } from "./author/createAuthorMutation";
import { deleteAuthor } from "./author/deleteAuthorMutation";
import { updateAuthor } from "./author/updateAuthorMutation";
import { createUser } from "../../resolvers/mutation/user/createUserMutation";
import { loginUser } from "./user/loginUserMutation";
export const Mutation = {
  //author mutations
  createAuthor,
  deleteAuthor,
  updateAuthor,
  createUser,
  loginUser,
};
