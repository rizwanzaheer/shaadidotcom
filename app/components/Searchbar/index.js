/**
*
* Searchbar
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Dropdown from 'components/Dropdown';
import { options, listOfDropDown } from './SearchbarData';
import messages from './messages';
import './SearchbarStyle.scss';

class Searchbar extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="container searchbar-container">
        <div className="row">
          <div className="col s12 searchbar-bg">
            {listOfDropDown.map((data) => (
              <div className="col s3" key={data.label}>
                <Dropdown options={data.options} label={data.label} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Searchbar.propTypes = {};

export default Searchbar;
