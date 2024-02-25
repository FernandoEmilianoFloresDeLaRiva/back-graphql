import { typeAuthor, typeBook } from "./entities";
import { allMutations } from "./mutations/typeMutation";
import { allQuerys } from "./queries/typeQuery";

export const typeDefs = typeAuthor + typeBook + allQuerys + allMutations;
