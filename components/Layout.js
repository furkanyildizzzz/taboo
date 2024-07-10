// components/Layout.js

import React from 'react';
import Container from './Container';
import Content from './Content';

const Layout = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
