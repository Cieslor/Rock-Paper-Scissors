import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { SecondaryButton } from './Buttons/Buttons';
import Modal from './Modal';
import { fadeInVariants } from '../animations/variants';

const RulesContainer = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  right: 25px;
`;

const Rules = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <RulesContainer
      variants={fadeInVariants}
      initial='hidden'
      animate='visible'
      transition={{ delay: 0.5 }}
    >
      <SecondaryButton onClick={() => setShowModal(true)}>
        Rules
      </SecondaryButton>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </RulesContainer>
  );
};

export default Rules;
