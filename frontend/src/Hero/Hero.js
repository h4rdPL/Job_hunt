import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: relative;
`;
const Accent = styled.span`
  color: #4348db;
`;
const Paragraph = styled.p`
  font-size: 1rem;
  color: #aaaaaa;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
const Heading = styled.h1`
  font-size: 1.3rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Hero = () => {
  return (
    <Wrapper>
      <Heading>
        Find <Accent>Web3</Accent> and Crypto jobs for Students and Graduates
      </Heading>
      <Paragraph>Connecting Universities to Web3</Paragraph>
    </Wrapper>
  );
};
