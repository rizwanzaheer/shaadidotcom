/**
 *
 * SearchContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Dropdown from 'components/Dropdown';
import Select from 'react-select';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSearchContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Gender, Religion, MotherTongue, AgeFinder } from './SearchbarData';
import './SearchContainer.scss';

const FIELDGENERATER = [
  {
    name: 'Matrial Status',
    data: [],
  },
  {
    name: 'Religion',
    data: Religion,
  },
  {
    name: 'Mother Tounge',
    data: MotherTongue,
  },
  {
    name: 'Community',
    data: [],
  },
];

export class SearchContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    selectedOption: '',
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  };
  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    return (
      <div className="container advanced-search-container">
        <Helmet>
          <title>Search Bride/Groom</title>
          <meta name="description" content="Description of SearchContainer" />
        </Helmet>
        <div className="row single-entity">
          <div className="col-3">Looking For</div>
          <div className="col-8">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Bride
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Groom
              </label>
            </div>
          </div>
        </div>

        <div className="row single-entity">
          <div className="col-3">Age</div>
          <div className="col-8">
            <div className="row">
              <div className="col-5">
                <Dropdown />
              </div>
              <div className="col-1">to</div>
              <div className="col-5">
                <Dropdown />
              </div>
            </div>
          </div>
        </div>

        <div className="row single-entity">
          <div className="col-3">Height</div>
          <div className="col-8">
            <div className="row">
              <div className="col-5">
                <Select
                  name="form-field-name"
                  value={value}
                  onChange={this.handleChange}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                  ]}
                />
              </div>
              <div className="col-1">
                <label htmlFor="">to</label>
              </div>
              <div className="col-5">
                <Select
                  name="form-field-name"
                  value={value}
                  onChange={this.handleChange}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                  ]}
                />
              </div>
            </div>
            {/* <Select
              name="form-field-name"
              value={value}
              onChange={this.handleChange}
              options={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
              ]}
            />
            <label htmlFor="">To</label>
            <Select
              name="form-field-name"
              value={value}
              onChange={this.handleChange}
              options={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
              ]}
            /> */}
          </div>
        </div>

        {FIELDGENERATER.map((data) => (
          <div className="row single-entity" key={data.name}>
            <div className="col-3">{data.name}</div>
            <div className="col-8">
              <Select
                name="form-field-name"
                value={value}
                onChange={this.handleChange}
                options={data.data}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

SearchContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  searchcontainer: makeSelectSearchContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchContainer', reducer });
const withSaga = injectSaga({ key: 'searchContainer', saga });

export default compose(withReducer, withSaga, withConnect)(SearchContainer);
