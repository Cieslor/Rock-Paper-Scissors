/* tokenType : array of types that it beats */

const matchUp = {
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  rock: ['lizard', 'scissors'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};

export const getBattleResult = (
  playerPick: keyof typeof matchUp,
  housePick: string
): undefined | boolean => {
  const playerBeats = matchUp[playerPick];

  return (playerPick as string) === housePick
    ? undefined
    : playerBeats.includes(housePick);
};
