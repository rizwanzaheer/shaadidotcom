import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto',sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f1f1f2;
    min-height: 100%;
    min-width: 100%;
  }
  button{
    cursor:pointer;
  }
  label {
    //font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
