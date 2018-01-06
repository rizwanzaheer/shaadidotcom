/**
 *
 * SearchUsers
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ImageUploader from 'react-images-upload';
import request from 'superagent';
import { nodeApiServerUrl } from '../../config/envChecker';

import ProfileCompactView from 'components/ProfileCompactView';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSearchUsers from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class SearchUsers extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      image1: '',
    };

    this.handleUploadFile = this.handleUploadFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.profileData = {
      name: 'Rizwan',
      age: 23,
      height: 5,
      weight: 0,
      religion: 'Islam',
      motherToungue: 'Urdu',
      profileId: 1,
    };
  }

  handleUploadFile = (event) => {
    console.log('event', event.target);
    this.setState({
      image1: event.target.files[0],
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const dataDemo = {
      image: this.state.image1,
    };

    request
      .post(`${nodeApiServerUrl}/api/upload/image`)
      .set('Content-Type', 'application/json')
      .send(dataDemo)
      .end((err, res) => {
        console.log('err', err);
        console.log('res', res);
      });
  }
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>SearchUsers</title>
          <meta name="description" content="Description of SearchUsers" />
        </Helmet>
        <div className="col-12">
          <FormattedMessage {...messages.header} />
          <h1>Your Search Result</h1>
          <form encType="multipart/form-data">
            <div style={{ width: '100%', marginTop: '10px' }}>
              Image 1
              <input
                name="image1"
                type="file"
                onChange={this.handleUploadFile}
              />
            </div>

            <div style={{ width: '100%', marginTop: '10px' }}>
              <input
                type="submit"
                name="submit"
                value="submit"
                onClick={this.handleSubmit}
              />
            </div>
          </form>
          <ProfileCompactView data={this.profileData} />
          <ProfileCompactView data={this.profileData} />
          <ProfileCompactView data={this.profileData} />
          <ProfileCompactView data={this.profileData} />
          <ProfileCompactView data={this.profileData} />
          <ProfileCompactView data={this.profileData} />
          <ProfileCompactView data={this.profileData} />
          <ProfileCompactView data={this.profileData} />
        </div>
      </div>
    );
  }
}

SearchUsers.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  searchusers: makeSelectSearchUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchUsers', reducer });
const withSaga = injectSaga({ key: 'searchUsers', saga });

export default compose(withReducer, withSaga, withConnect)(SearchUsers);
