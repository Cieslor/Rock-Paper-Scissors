import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components';
import { fadeInVariants, modalVariants } from '../animations/variants';
import RulesImage from '../assets/image-rules-bonus.svg';

interface IModalProps {
  showModal: boolean;
  setShowModal: Function;
}

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalBody = styled(motion.div)`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 40px;
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.utils.borderRadius};
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.p`
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.dark};
`;

const ModalCloseIcon = styled(IoMdClose)`
  color: #ccc;
  font-size: 28px;
  cursor: pointer;
`;

const ModalCloseIconDesktop = styled(ModalCloseIcon)`
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

const ModalCloseIconMobile = styled(ModalCloseIcon)`
  @media (min-width: calc(${(props) => props.theme.breakpoints.mobile} + 1px)) {
    display: none;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
`;

const Modal = ({ showModal, setShowModal }: IModalProps) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <Backdrop
          variants={fadeInVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <ModalBody variants={modalVariants}>
            <ModalHeader>
              <ModalTitle>Rules</ModalTitle>
              <ModalCloseIconDesktop onClick={() => setShowModal(false)} />
            </ModalHeader>
            <ModalImage src={RulesImage} />
            <ModalCloseIconMobile onClick={() => setShowModal(false)} />
          </ModalBody>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;
