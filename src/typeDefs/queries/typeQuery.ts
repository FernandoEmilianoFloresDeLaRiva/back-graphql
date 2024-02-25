import { getAuthors } from "./getAuthors"
import { getBooks } from "./getBooks"

export const allQuerys : string =`
type Query {
    ${getAuthors}
    ${getBooks}
}
`