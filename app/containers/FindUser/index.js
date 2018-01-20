/**
 *
 * FindUser
 *
 */

import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import ConnectWith from 'components/ConnectWith';
import ImageThumbnail from 'components/ImageThumbnail';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { nodeApiServerUrl } from '../../config/envChecker';
import './FindUserStyle.scss';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import makeSelectFindUser from './selectors';
import ConnectInstantly from '../../images/connect-instantly.png';

export class FindUser extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    // getting profile Id from URL
    // Then get Profile data using profile Id
    const profileId = this.props.match.params.id;
    try {
      axios
        .post(`${nodeApiServerUrl}/api/search/getuserbyid`, {
          id: profileId,
        })
        .then(({ data, statusText, status }) => {
          console.log(statusText);
          console.log(status);
          console.log('user is: ', data.user);
          if (statusText === 'OK' && status === 200) {
            this.setState(data.user, () => {
              console.log('this.state: ', this.state);
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { _id, image } = this.state;
    return (
      <div className="container">
        <Helmet>
          <title>FindUser</title>
          <meta name="description" content="Description of FindUser" />
        </Helmet>
        <div className="row custom-user-container">
          <div className="col-lg-4 col-4 custom-user-image-wrapper">
            <ImageThumbnail image={image} name="test" />
          </div>
          <div className="col-lg-8 col-8">
            <div className="custom-user-detail-wrapper">
              <div className="row">
                <div className="col-12">
                  <div className="connection-container">
                    <ConnectWith gender="Male" _id={_id} />
                    <div className="connection-footer">
                      <button className="btn btn-sm btn-outline-secondary">
                        Send Email
                      </button>
                      <img src={ConnectInstantly} alt="ConnectInstantly" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <FormattedMessage {...messages.header} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FindUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  finduser: makeSelectFindUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'findUser', reducer });
const withSaga = injectSaga({ key: 'findUser', saga });

export default withRouter(
  compose(withReducer, withSaga, withConnect)(FindUser)
);
