/**
 *
 * SweetAlertPopup
 *
 */

import React from 'react';
// import styled from 'styled-components';
import swal from 'sweetalert2';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import '../../../node_modules/sweetalert2/dist/sweetalert2.css';

const SweetAlertPopup = (title, text, type) =>
  swal({
    title,
    text,
    type,
    timer: 3000,
  }).then((result) => {
    if (result.dismiss === 'timer') {
      console.log('I was closed by the timer');
      // window.location.reload();
    }
  });

SweetAlertPopup.propTypes = {};

export default SweetAlertPopup;
