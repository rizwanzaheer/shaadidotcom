/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import CustomRoutes from 'config/routes';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Shaadi dot com App" defaultTitle="Shaadi dot com App">
        <meta name="description" content="A Shaadi dot com App" />
      </Helmet>
      <CustomRoutes />
    </AppWrapper>
  );
}
