/**
 *
 * Searchbar
 *
 */

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Dropdown from 'components/Dropdown';
import { listOfDropDown } from './SearchbarData';
import messages from './messages';
import './SearchbarStyle.scss';

class Searchbar extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="row">
        <div className="container">
          <div className="container_inner">
          </div>
          <div className="searchbar-bg">
            <div className="col s12 ">
              {listOfDropDown.map((data, index) => (
                <div
                  className={`col s12 m6 l${
                    index === 1 || index === 2 ? 3 : 4
                  } xl${index === 1 || index === 2 ? 2 : 2}`}
                  key={data.label}
                >
                  <Dropdown options={data.options} label={data.label} />
                </div>
              ))}
              <button className="btn lets-begin-btn waves-effect waves-light ">
                <FormattedMessage {...messages.letsBeginBtn} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Searchbar.propTypes = {};

export default Searchbar;
