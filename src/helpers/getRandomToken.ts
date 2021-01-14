import { TokenTypesArray, TokenTypes } from '../types';

export const getRandomToken = () => {
  return TokenTypesArray[
    Math.floor(Math.random() * TokenTypesArray.length)
  ] as TokenTypes;
};
