import React, { useState } from 'react';
import styled from 'styled-components';
import { SecondaryButton } from './Buttons/Buttons';
import Modal from './Modal';

const RulesContainer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

const Rules = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <RulesContainer>
      <SecondaryButton onClick={() => setShowModal(true)}>
        Rules
      </SecondaryButton>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </RulesContainer>
  );
};

export default Rules;
