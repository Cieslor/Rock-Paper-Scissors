import { TokenTypes } from "../types";
import { TokenTypesArray } from "../constants";

export const getRandomToken = () => {
  return TokenTypesArray[
    Math.floor(Math.random() * TokenTypesArray.length)
  ] as TokenTypes;
};
