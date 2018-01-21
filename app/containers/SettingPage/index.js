/**
 *
 * SettingPage
 *
 */

import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import ProfileComponent from 'components/ProfileComponent';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { nodeApiServerUrl } from '../../config/envChecker';
import { USERDETAIL } from '../../config/getUserDetailFromLocalStorage';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import makeSelectSettingPage from './selectors';
import './SettingPage.scss';

export class SettingPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  componentWillMount() {
    try {
      axios
        .post(`${nodeApiServerUrl}/api/getuseremail`, {
          _id: USERDETAIL._id,
        })
        .then(({ data }) => this.setState({ email: data.email.email }))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log('try catch error: ', error);
    }
  }
  render() {
    const { email } = this.state;
    return (
      <div className="container">
        <Helmet>
          <title>SettingPage</title>
          <meta name="description" content="Description of SettingPage" />
        </Helmet>
        <div className="row">
          <div className="col-12">
            <div className="account-setting-wrapper">
              <h5>My Account Settings</h5>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-3 col-sm-12">
                  <ProfileComponent />
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-sm-12">
                  <div className="settings-container">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        placeholder="Enter email"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
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

SettingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  settingpage: makeSelectSettingPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'settingPage', reducer });
const withSaga = injectSaga({ key: 'settingPage', saga });

export default compose(withReducer, withSaga, withConnect)(SettingPage);
