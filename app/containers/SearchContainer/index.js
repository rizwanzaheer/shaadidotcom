/**
 *
 * SearchContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Dropdown from 'components/Dropdown';
import MoreDetailButtonRight from 'components/MoreDetailButtonRight';
import RightSidePartnerSearchContainer from 'components/RightSidePartnerSearchContainer';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSearchContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { FIELDGENERATER, ageOfDropDown } from './SearchbarData';
import './SearchContainer.scss';

export class SearchContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      gender: 'Woman',
      fromAge: 20,
      toAge: 25,
      religion: 'Muslim',
      motherTongue: 'Urdu',
      community: 'Malik',
      matrialStatus: 'single',
    };
    this.dropDownChangeHandler = this.dropDownChangeHandler.bind(this);
    this.linkCreation = this.linkCreation.bind(this);
    this.reset = this.reset.bind(this);
  }

  dropDownChangeHandler({ dropDownType, value }) {
    this.setState({
      [dropDownType]: value,
    });
  }
  linkCreation() {
    const {
      gender,
      fromAge,
      toAge,
      religion,
      motherTongue,
      community,
      matrialStatus,
    } = this.state;
    this.props.history.push(
      `searchusers?gender=${gender}&fromage=${fromAge}&toage=${toAge}&matrialStatus=${matrialStatus}&religion=${religion}&mothertongue=${motherTongue}&community=${community}`
    );
  }
  reset() {}
  render() {
    const { gender, fromAge, toAge, religion, motherTongue } = this.state;
    return (
      <div className="container advanced-search-wrapper">
        <Helmet>
          <title>Search Bride/Groom</title>
          <meta name="description" content="Description of SearchContainer" />
        </Helmet>
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="advanced-search-container">
              <div className="row">
                <div className="col-12">
                  <h3 className="adcanced-search-heading">Advanced Search</h3>
                </div>
              </div>
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
                      onChange={() => this.setState({ gender: 'woman' })}
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
                      onChange={() => this.setState({ gender: 'man' })}
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
                      <Dropdown
                        options={ageOfDropDown[0].options}
                        defaultValue={fromAge}
                        dropDownChangeHandler={this.dropDownChangeHandler}
                      />
                    </div>
                    <div className="col-1">to</div>
                    <div className="col-5">
                      <Dropdown
                        options={ageOfDropDown[0].options}
                        defaultValue={toAge}
                        dropDownChangeHandler={this.dropDownChangeHandler}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {FIELDGENERATER.map(({ data, name }) => (
                <div className="row single-entity" key={name}>
                  <div className="col-3">{name}</div>
                  <div className="col-8">
                    <Dropdown
                      options={data}
                      defaultValue=""
                      dropDownChangeHandler={this.dropDownChangeHandler}
                    />
                  </div>
                </div>
              ))}
              <div className="row text-center">
                <div className="col-12">
                  <span
                    className="advanced-search-btn"
                    onClick={this.linkCreation}
                  >
                    <MoreDetailButtonRight label="Search" url="#" />
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span onClick={this.reset}>
                    <MoreDetailButtonRight label="Reset" url="#" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <RightSidePartnerSearchContainer
              heading="Search By Name"
              footer={false}
              btn="Search"
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Name"
                    />
                  </div>
                </div>
              </div>
            </RightSidePartnerSearchContainer>
            <RightSidePartnerSearchContainer
              heading="Search By Name"
              footer
              btn="Search"
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Name"
                    />
                  </div>
                </div>
              </div>
            </RightSidePartnerSearchContainer>
          </div>
        </div>
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

export default withRouter(
  compose(withReducer, withSaga, withConnect)(SearchContainer)
);
