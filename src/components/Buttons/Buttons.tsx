import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { secondaryButtonHover } from '../../animations/hovers';

interface IButtonWidth {
  width?: string;
}

interface IButtonProps {
  onClick: Function;
  children: React.ReactNode;
}

const buttonBase = styled(motion.button)<IButtonWidth>`
  width: ${(props) => props.width || 'auto'};
  padding: 10px 40px;
  font-family: inherit;
  font-size: 18px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border-radius: ${(props) => props.theme.utils.borderRadius};
  cursor: pointer;
`;

const PrimaryButtonBase = styled(buttonBase)`
  color: ${(props) => props.theme.colors.dark};
  background: ${(props) => props.theme.colors.white};
`;

const SecondaryButtonBase = styled(buttonBase)`
  color: ${(props) => props.theme.colors.white};
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.white};
`;

export const SecondaryButton = ({ onClick, children }: IButtonProps) => {
  return (
    <SecondaryButtonBase
      onClick={() => onClick()}
      variants={secondaryButtonHover}
      whileHover='hover'
    >
      {children}
    </SecondaryButtonBase>
  );
};
