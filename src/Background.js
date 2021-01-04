import React from 'react';
import { createGlobalStyle } from 'styled-components';
import MaterialExample from './MaterialExample';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function Background() {
    return (
        <>
        <GlobalStyle/>
        <MaterialExample />
        </>
    );
}

export default Background;