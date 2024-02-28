import authors from "../query/author/authorsQuery";
import author from "../query/author/authorsByNameQuery";
import users from "../query/user/usersQuery";
import books from "../query/book/booksQuery";
import bookByName from "../query/book/booksByNameQuery";
import booksByAuthor from "../query/book/bookByAuthorQuery";

export const Query = {
  //author queries
  authors,
  author,
  users,
  books,
  bookByName,
  booksByAuthor,
};
