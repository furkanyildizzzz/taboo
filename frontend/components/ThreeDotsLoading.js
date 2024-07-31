import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for the ellipsis animation
const ellipsisAnimation = keyframes`
  0% { content: '...'; }
  33% { content: '.'; }
  66% { content: '..'; }
  100% { content: '...'; }
`;

// Style the container
const PStyles = styled.p`
  ::after {
    content: '...';
    animation: ${ellipsisAnimation} 1.5s infinite steps(4);
  }
`;

// Loading component
const ThreeDotsLoading = ({ text }) => <PStyles>{<p>{text}</p>}</PStyles>;

export default ThreeDotsLoading;
