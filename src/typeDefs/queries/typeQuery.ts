import { getAuthorByName } from "./author/getAuthorByName";
import { getAuthors } from "./author/getAuthors";
import { getBookByName } from "./book/getBookByName";
import { getBooks } from "./book/getBooks";
import { getBooksByAuthors } from "./book/getBooksByAuthor";
import { getUsers } from "./user/login";

export const allQuerys: string = `
type Query {
    ${getAuthors}
    ${getAuthorByName}
    ${getBooks}
    ${getBookByName}
    ${getBooksByAuthors}
    ${getUsers}
}
`;
