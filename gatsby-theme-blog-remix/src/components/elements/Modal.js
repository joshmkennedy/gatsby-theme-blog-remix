import React from "react";
import styled from "@emotion/styled";
/**@jsx jsx */
import { jsx } from "theme-ui";
import Portal from "./Portal";
import Icon from "./Icon";

const Modal = ({ children, toggle, iconColor, modalColor }) => {
  return (
    <Portal id='portal'>
      <ModalWrapper>
        <Background />
        <Card
          sx={{
            bg: `background`,
          }}
        >
          <CloseButton onClick={toggle}>
            <Icon color={iconColor} name='close' />
          </CloseButton>
          {children}
        </Card>
      </ModalWrapper>
    </Portal>
  );
};

const ModalWrapper = styled.div`
  z-index: 9;
  transition: all 0.3s ease-in;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh;
`;
const Card = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  position: relative;
  min-width: 350px;

  padding: 15px;

  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;
const Background = styled.div`
  grid-column: 1/-1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0.5;
  height: 100%;
  background: black;
`;
const CloseButton = styled.button`
  position: absolute;
  background: transparent;
  right: 20px;
  padding: 5px;

  border: none;
  top: 20px;
`;

export default Modal;
