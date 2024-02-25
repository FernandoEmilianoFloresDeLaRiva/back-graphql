import { createAuthor } from "./author/createAuthor";
import { createBook } from "./book/createBook";


export const allMutations : string = `
type Mutation {
    ${createBook}
    ${createAuthor}
}
`
