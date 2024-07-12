// components/Layout.js

import React from 'react';
import Container from './Container';
import Content from './Content';
import DummyCard from './DummyCard';

const Layout = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
      <DummyCard order={1} />
      <DummyCard order={2} />
      <DummyCard order={3} />
    </Container>
  );
};

export default Layout;
