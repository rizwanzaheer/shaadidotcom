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
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - React.js App" defaultTitle="React.js App">
        <meta name="description" content="A React.js App" />
      </Helmet>
      <CustomRoutes />
    </div>
  );
}
