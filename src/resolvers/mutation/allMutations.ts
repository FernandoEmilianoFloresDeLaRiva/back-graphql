import { createAuthor } from "./author/createAuthorMutation";
import { deleteAuthor } from "./author/deleteAuthorMutation";
import { updateAuthor } from "./author/updateAuthorMutation";
import { createUser } from "../../resolvers/mutation/user/createUserMutation";
import { loginUser } from "./user/loginUserMutation";
import { deleteBook } from "./book/deleteBookMutation";
import { createBook } from "./book/createBookMutation"; 
import { updateBook } from "./book/updateBookMutation";

export const Mutation = {
  //author mutations
  createAuthor,
  deleteAuthor,
  updateAuthor,
  createUser,
  loginUser,
  deleteBook,
  createBook,
  updateBook,
};
