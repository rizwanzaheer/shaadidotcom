/**
 *
 * EditProfileContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import axios from 'axios';

import ProfileComponent from 'components/ProfileComponent';
import Dropdown from 'components/Dropdown';
import makeSelectEditProfileContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { nodeApiServerUrl } from '../../config/envChecker';
import { USERDETAIL } from '../../config/getUserDetailFromLocalStorage';

import './EditProfileContainerStyle.scss';

export class EditProfileContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    try {
      axios
        .post(`${nodeApiServerUrl}/api/getuserdetail`, {
          userId: USERDETAIL._id,
        })
        .then(({ data: { user }, status, statusText }) => {
          if (status === 200 && statusText === 'OK') {
            console.log(user);
            // for (const key in user) {
            //   if (user.hasOwnProperty(key)) {
            //     console.log(`${key} -> ${user[key]}`);
            //   }
            // }
            Object.entries(user).forEach(([key, value]) =>
              // console.log(key, value);
              this.setState({ [key]: value })
            );
            console.log('this state: ', this.state);
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }

  renderField = () => {
    console.log('working');
    const loopData = [];
    const excludeEntries = [
      '_id',
      '__v',
      'image',
      'createdDate',
      'modifiedDate',
      'password',
    ];
    Object.entries(this.state).forEach(([key, value]) =>
      // console.log(key, value);
      // this.setState({ [key]: value })
      loopData.push(
        excludeEntries.includes(key) ? (
          ''
        ) : (
          <div className="row" key={key}>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-5">
                  <label className="edit-personal-profile-heading">{key}</label>
                </div>
                <div className="col-lg-7">
                  <p>: {value}</p>
                </div>
              </div>
            </div>
          </div>
        )
      )
    );
    return loopData;
  };

  render() {
    const { fname} = this.state;
    return (
      <div className="container">
        <Helmet>
          <title>EditProfileContainer</title>
          <meta
            name="description"
            content="Description of EditProfileContainer"
          />
        </Helmet>
        <div className="row edit-profile-container">
          <div className="col-12 col-md-12 col-lg-3 col-sm-12">
            <ProfileComponent />
          </div>
          <div className="col-12 col-md-12 col-lg-8 col-sm-12 edit-profile-wrapper">
            <div className="row">
              <div className="col-12">
                <h3 className="edit-personal-profile-heading">
                  <FormattedMessage {...messages.header} />
                </h3>
              </div>
            </div>
            {/* {this.renderField()} */}
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-lg-5">
                    <label>First Name </label>
                  </div>
                  <div className="col-lg-7">
                    <p>: {fname} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditProfileContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  editprofilecontainer: makeSelectEditProfileContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'editProfileContainer', reducer });
const withSaga = injectSaga({ key: 'editProfileContainer', saga });

export default compose(withReducer, withSaga, withConnect)(
  EditProfileContainer
);
