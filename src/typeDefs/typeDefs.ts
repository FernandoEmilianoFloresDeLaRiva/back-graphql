import { typeAuthor, typeBook, typeUser } from "./entities";
import { allMutations } from "./mutations/typeMutation";
import { allQuerys } from "./queries/typeQuery";

export const typeDefs: string =
  typeAuthor + typeBook + typeUser + allQuerys + allMutations;
