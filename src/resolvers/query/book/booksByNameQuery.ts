import { GraphQLError } from "graphql";
import { getBookByAuthorService } from "../../../services/books/getBookByAuthor.service";
import { Author } from "../../../entities/author/author.entity";
import { getAuthorById } from "../../../repositories/authorsRepository";

export default async (_root: any, args: any) => {
  try {
    const { bookName } = args;
    const res = await getBookByAuthorService(bookName);
    const resAuthor: Author = await getAuthorById(res.author);
    const finalRes = {
      ...res,
      Author: {
        ...resAuthor,
      },
    };
    console.log(finalRes);
    return finalRes;
  } catch (error: any) {
    throw new GraphQLError(error);
  }
};
