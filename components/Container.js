// components/Layout.js

import React from 'react';
import styled from 'styled-components';
import bgImage from '../public/images/pattern-light.png';

const ContainerStyles = styled.div.attrs({ className: 'layout' })`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  &:before {
    display: block;
    content: '';
    height: 100%;
    width: 100%;
    background-image: url('/public/images/pattern-light.png');
    opacity: 0.6;
    position: absolute;
    top: 0px;
    left: 0px;
  }
`;

const Container = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};

export default Container;
