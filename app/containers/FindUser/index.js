/**
 *
 * FindUser
 *
 */

import { Modal, Button, Input } from 'antd';
import axios from 'axios';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import 'antd/lib/button/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/modal/style/css';
import ConnectWith from 'components/ConnectWith';
import ImageThumbnail from 'components/ImageThumbnail';
import SweetAlertPopup from 'components/SweetAlertPopup';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { nodeApiServerUrl } from '../../config/envChecker';
import { USERDETAIL } from '../../config/getUserDetailFromLocalStorage';
import ConnectInstantly from '../../images/connect-instantly.png';
import './FindUserStyle.scss';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import makeSelectFindUser from './selectors';
const { TextArea } = Input;

export class FindUser extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      message: '',
    };
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
          if (statusText === 'OK' && status === 200) {
            this.setState(data.user);
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }
  onMessageChange = (e) => {
    this.setState({ message: e.target.value });
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  handleOk = () => {
    const { message } = this.state;
    if (message) {
      try {
        axios
          .post(`${nodeApiServerUrl}/api/user/email`, {
            userId: USERDETAIL._id,
            fname: USERDETAIL.fname,
            lname: USERDETAIL.lname,
            message,
            profileId: this.props.match.params.id,
          })
          .then((mes) => {
            console.log('message is: ', mes);
            if (mes.status === 200 && mes.statusText === 'OK') {
              SweetAlertPopup('Email Send', 'Email Send Successfuly!', 'success');
            }
          })
          .catch((err) => {
            console.log(err);
            SweetAlertPopup('Email not Send', 'Email Not Send Successfuly Due to some Issue!', 'error');
          });
      } catch (error) {
        console.log(error);
      }
    }
    this.setState({
      visible: false,
    });
  };
  render() {
    const {
      _id,
      image,
      age,
      height,
      weight,
      aboutMySelf,
      bloodGroup,
      bodyType,
      city,
      community,
      country,
      dob,
      drink,
      education,
      familyAffluence,
      fname,
      lname,
      hairType,
      healthInformation,
      motherTongue,
      phone,
      province,
      religion,
      skinTone,
      smoke,
      status,
    } = this.state;
    return (
      <div className="container">
        <Helmet>
          <title>FindUser</title>
          <meta name="description" content="Description of FindUser" />
        </Helmet>
        <div className="row custom-user-container">
          <div className="col-lg-4 col-4 custom-user-image-wrapper">
            <h3>
              {fname || 'N/A'} {lname || 'N/A'}
            </h3>
            <ImageThumbnail image={image} name="test" />
          </div>
          <div className="col-lg-8 col-8">
            <div className="custom-user-detail-wrapper">
              <div className="row">
                <div className="col-12">
                  <div className="connection-container">
                    <ConnectWith gender="Male" _id={_id} />
                    <div className="connection-footer">
                      <button
                        onClick={this.showModal}
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Send Email
                      </button>
                      <img src={ConnectInstantly} alt="ConnectInstantly" />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="profile-detail-container">
                    <p>
                      <i className="fa fa-user" aria-hidden="true" />
                      {age ? `${age} years` : 'N/A'},{' '}
                      {height ? `${height} inc` : 'N/A'},{' '}
                      {weight ? `${weight} kg` : 'N/A'}
                    </p>
                    <p>
                      <i className="fa fa-user" aria-hidden="true" />
                      {status ? `${status}` : 'N/A'}
                    </p>
                    <p>
                      <i className="fa fa-user" aria-hidden="true" />
                      {religion ? `${religion}` : 'N/A'}
                    </p>
                    <p>
                      <i className="fa fa-language" aria-hidden="true" />
                      {motherTongue ? `${motherTongue}` : 'N/A'}
                    </p>
                    <p>
                      <i className="fa fa-graduation-cap" aria-hidden="true" />
                      {education ? `${education}` : 'N/A'}
                    </p>
                    <p>
                      <i className="fa fa-globe" aria-hidden="true" />
                      {city ? `${city}, ${province}, ${country}` : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="profile-about-container">
                    <h4 className="about-detail-heading">Detail Profile</h4>
                    {/* <h3 className="about-heading">
                      About {gender === 'Male' ? 'him' : 'her'}
                    </h3> */}
                    <p>
                      <i className="fa fa-info-circle" aria-hidden="true" />
                      {aboutMySelf ? `${aboutMySelf}` : 'N/A'}
                    </p>
                    <p>
                      <i className="fa fa-user" aria-hidden="true" />
                      {age ? `${age} years` : 'N/A'},{' '}
                      {height ? `${height} inc` : 'N/A'},{' '}
                      {weight ? `${weight} kg` : 'N/A'}
                    </p>
                    <p>
                      <i className="fa fa-beer" aria-hidden="true" />
                      {drink ? `${drink}` : 'N/A'}
                    </p>
                    <p>
                      <i className="fa fa-graduation-cap" aria-hidden="true" />
                      {education ? `${education}` : 'N/A'}
                    </p>
                    <p>
                      <i className="fa fa-language" aria-hidden="true" />
                      {motherTongue ? `${motherTongue}` : 'N/A'}
                    </p>
                    <p>
                      {' '}
                      <b>Status</b>: {status ? `${status}` : 'N/A'}
                    </p>
                    <p>
                      {' '}
                      <b>Date of birth</b>:{' '}
                      {moment(dob) ? (
                        `${moment(dob).format('MM/DD/YYYY')}`
                      ) : (
                        'N/A'
                      )}
                    </p>
                    <p>
                      {' '}
                      <b>Religion</b>: {religion ? `${religion}` : 'N/A'}
                    </p>
                    <p>
                      {' '}
                      <b>Community</b>: {community ? `${community}` : 'N/A'}
                    </p>
                    <p>
                      {' '}
                      <b>Family Affluence</b>:{' '}
                      {familyAffluence ? `${familyAffluence}` : 'N/A'}
                    </p>
                    <p>
                      {' '}
                      <b>Smoke</b>: {smoke ? `${smoke}` : 'N/A'}
                    </p>
                    <p>
                      {' '}
                      <b>Hair Type</b>: {hairType ? `${hairType}` : 'N/A'}
                    </p>
                    <p>
                      {' '}
                      <b>Skin Tone</b>: {skinTone ? `${skinTone}` : 'N/A'}
                    </p>
                    <p>
                      {' '}
                      <b>Blood Group</b>: {bloodGroup ? `${bloodGroup}` : 'N/A'}
                    </p>
                    <p>
                      <b>Body Type</b>: {bodyType ? `${bodyType}` : 'N/A'}
                    </p>
                    <p>
                      <i className="fa fa-mobile" aria-hidden="true" />
                      {phone ? `${phone}` : 'N/A'}
                    </p>
                    <p>
                      <i className="fa fa-globe" aria-hidden="true" />
                      {city ? `${city}, ${province}, ${country}` : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Modal
            title="Write Email"
            visible={this.state.visible}
            onOk={this.handleOk}
            okText="Send"
            onCancel={this.handleCancel}
          >
            <TextArea rows={6} onChange={this.onMessageChange} />
          </Modal>
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
