import React from 'react';
// import { MdChevronLeft, MdChevronRight, MdToday } from 'react-icons/md';
import styled from 'styled-components';

const ModalBack = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 360px;
  margin: auto;
  background-color: red;
  padding: 8px;
`;

const EventPopup = ({ event }) => {
  console.log(event);
  const { title } = event;

  return (
    <ModalBack>
      <ModalContainer>{title}</ModalContainer>
    </ModalBack>
  );
};

export default EventPopup;
