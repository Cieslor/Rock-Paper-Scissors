import LizardIcon from '../assets/icon-lizard.svg';
import PaperIcon from '../assets/icon-paper.svg';
import RockIcon from '../assets/icon-rock.svg';
import ScissorsIcon from '../assets/icon-scissors.svg';
import SpockIcon from '../assets/icon-spock.svg';

const Icons = {
  lizard: LizardIcon,
  paper: PaperIcon,
  rock: RockIcon,
  scissors: ScissorsIcon,
  spock: SpockIcon,
};

export const getIconByName = (name: keyof typeof Icons) => {
  return Icons[name];
};
