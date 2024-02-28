import { createAuthor } from "./author/createAuthor";
import { deleteAuthor } from "./author/deleteAuthor";
import { updateAuthor } from "./author/updateAuthor";
import { createBook } from "./book/createBook";
import { deleteBook } from "./book/deleteBook";
import { updateBook } from "./book/updateBook";
import { createUser } from "./user/createUser";
import { loginUser } from "./user/loginUser";

export const allMutations: string = `
type Mutation {
    ${createBook}
    ${updateBook}
    ${deleteBook}
    ${createAuthor}
    ${updateAuthor}
    ${deleteAuthor}
    ${createUser}
    ${loginUser}
}
`;
