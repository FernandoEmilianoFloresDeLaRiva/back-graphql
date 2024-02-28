import { Author } from "../../entities/author/author.entity";
import { Book } from "../../entities/book/book.entity";
import { GetBook } from "../../entities/book/getBookDTO";
import { getAuthorById } from "../../repositories/authorsRepository";

export async function asignAuthorToBook(book: Book) : Promise<GetBook>{
    const resAuthor: Author = await getAuthorById(book.author);
    const finalRes : GetBook = {
        ...book,
        author: {
          ...resAuthor,
        },
      };
    return finalRes;
}
