import { createAuthor } from "./createAuthor";
import { createBook } from "./createBook";


export const allMutations : string = `
type Mutation {
    ${createBook}
    ${createAuthor}
}
`
