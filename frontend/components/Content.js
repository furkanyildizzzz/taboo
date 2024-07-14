// components/Layout.js

import React from 'react';
import styled from 'styled-components';

const ContentStyles = styled.div`
  padding: 1rem 0rem 6rem;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  width: 30rem;
  max-width: 100%;
  margin: 0px auto;
`;

const Content = ({ children }) => {
  return <ContentStyles>{children}</ContentStyles>;
};

export default Content;
