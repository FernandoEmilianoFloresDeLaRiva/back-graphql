import { getAuthors } from "./author/getAuthors"
import { getBooks } from "./book/getBooks"

export const allQuerys : string =`
type Query {
    ${getAuthors}
    ${getBooks}
}
`