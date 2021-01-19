import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { fadeInWithDelayVariants } from "../animations/variants";

interface IWinningSideIndicatorProps {
  opacity: number;
  width: string;
}

const WinningSideIndicatorBase = styled(motion.div)<IWinningSideIndicatorProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${(props) => props.width};
  padding-top: ${(props) => props.width};
  border-radius: 50%;
  background: rgba(30, 112, 153, ${(props) => props.opacity});
  transform: translate(-50%, -50%);
`;

const WinningSideIndicator = ({
  width,
  opacity,
}: IWinningSideIndicatorProps) => {
  return (
    <WinningSideIndicatorBase
      variants={fadeInWithDelayVariants}
      initial="hidden"
      animate="visible"
      custom={1}
      width={width}
      opacity={opacity}
    >
      <WinningSideIndicatorBase
        variants={fadeInWithDelayVariants}
        custom={1.25}
        width={width}
        opacity={opacity}
      >
        <WinningSideIndicatorBase
          variants={fadeInWithDelayVariants}
          custom={1.5}
          width={width}
          opacity={opacity}
        ></WinningSideIndicatorBase>
      </WinningSideIndicatorBase>
    </WinningSideIndicatorBase>
  );
};

export default WinningSideIndicator;
