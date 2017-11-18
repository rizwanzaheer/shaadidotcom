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

import Header from 'components/Header';
import Footer from 'components/Footer';
import CustomRoutes from '../../config/routes';
import axios from 'axios';

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
      <Header />
      <CustomRoutes />
      <button
        className="btn"
        onClick={(e) => {
          axios({
            method: 'get',
            url: 'https://localhost:5000',
          })
            .then((response) => {
              console.log(response);
            })
            .catch((error, data) => {
              console.log('data: ', data);
              console.log('error occure: ', error);
            });
        }}
      >
        Axios
      </button>
      <Footer />
    </div>
  );
}
