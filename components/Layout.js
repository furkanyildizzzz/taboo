// components/Layout.js

import React from 'react';
import styled from 'styled-components';
import bgImage from '../public/images/pattern-light.png';

const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  ::before {
    display: block;
    content: '';
    height: 100%;
    width: 100%;
    background-image: bgImage;
    opacity: 0.6;
    position: absolute;
    top: 0px;
    left: 0px;
  }
`;

const Content = styled.div`
  padding: 1rem 0rem 6rem;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  width: 30rem;
  max-width: 100%;
  margin: 0px auto;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
