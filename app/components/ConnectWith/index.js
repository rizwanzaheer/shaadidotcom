/**
 *
 * ConnectWith
 *
 */

import { Modal, Button, Input } from 'antd';
import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import 'antd/lib/button/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/modal/style/css';
import MoreDetailButtonRight from 'components/MoreDetailButtonRight';
import SweetAlertPopup from 'components/SweetAlertPopup';
import { nodeApiServerUrl } from '../../config/envChecker';
import { USERDETAIL } from '../../config/getUserDetailFromLocalStorage';
import './ConnectWithStyle.scss';
const { TextArea } = Input;

class ConnectWith extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      message: '',
      _id: '',
    };
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
    const { message, _id } = this.state;
    console.log('send email working', _id);
    if (message) {
      try {
        axios
          .post(`${nodeApiServerUrl}/api/user/email`, {
            userId: _id,
            fname: USERDETAIL.fname,
            lname: USERDETAIL.lname,
            message,
            profileId: USERDETAIL._id,
          })
          .then((mes) => {
            console.log('message is: ', mes);
            if (mes.status === 200 && mes.statusText === 'OK') {
              SweetAlertPopup(
                'Email Send',
                'Email Send Successfuly!',
                'success'
              );
            }
          })
          .catch((err) => {
            console.log(err);
            SweetAlertPopup(
              'Email not Send',
              'Email Not Send Successfuly Due to some Issue!',
              'error'
            );
          });
      } catch (error) {
        console.log(error);
      }
    }
    this.setState({
      visible: false,
    });
  };

  yesClickHandler = (_id) => {
    console.log('yes click: ', _id);
    console.log('USERDETAIL id: ', USERDETAIL._id);
    this.showModal();
    this.setState({
      _id,
    });
    // try {
    //   axios
    //     .post(`${nodeApiServerUrl}/api/adduserinshortlist`, {
    //       userId: USERDETAIL._id,
    //       profileId: _id,
    //     })
    //     .then((user) => console.log('user is: ', user))
    //     .catch((err) => console.log(err));
    // } catch (error) {
    //   console.log(error);
    // }
  };
  noClickHandler = (_id) => {
    console.log('no click', _id);
    try {
      axios
        .patch(`${nodeApiServerUrl}/api/adduserinrejectedlist`, {
          _id: USERDETAIL._id,
          profileId: _id,
        })
        .then(({ data, status, statusText }) => {
          console.log('user is: ', data);
          if (status === 200 && statusText === 'OK') {
            if (data.message === 'Member is Already in your Rejected List!') {
              SweetAlertPopup('Not Added', data.message, 'info');
            } else if (
              data.message === 'Member Successfuly Added in your Rejected List!'
            ) {
              SweetAlertPopup('Successfuly Added!', data.message, 'success');
            } else {
              SweetAlertPopup('Error!', 'Something wents Wrrong!!!!', 'error');
            }
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  mayBeClickHandler = (_id) => {
    console.log('maybe click', _id);
    try {
      axios
        .post(`${nodeApiServerUrl}/api/adduserinshortlist`, {
          userId: USERDETAIL._id,
          profileId: _id,
        })
        .then(({ data, status, statusText }) => {
          console.log('user is: ', data);
          if (status === 200 && statusText === 'OK') {
            if (data.message === 'Member is Already in your Short List!') {
              SweetAlertPopup('Not Added', data.message, 'info');
            } else if (
              data.message === 'Member Successfuly Added in your Short List!'
            ) {
              SweetAlertPopup('Successfuly Added!', data.message, 'success');
            } else {
              SweetAlertPopup('Error!', 'Something wents Wrrong!!!!', 'error');
            }
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { _id, gender } = this.props;
    return (
      <div className="connect-with-her-wrapper">
        <h6>Connect with {gender === 'Male' ? 'him' : 'her'}?</h6>
        <button
          onClick={() => this.yesClickHandler(_id)}
          className="btn waves-effect waves-light"
        >
          Yes
        </button>
        <button
          onClick={() => this.mayBeClickHandler(_id)}
          className="btn waves-effect waves-light"
        >
          Maybe
        </button>
        <button
          onClick={() => this.noClickHandler(_id)}
          className="btn waves-effect waves-light"
        >
          No
        </button>
        <MoreDetailButtonRight label="View profile" url={`finduser/${_id}`} />
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
    );
  }
}

ConnectWith.propTypes = {
  _id: PropTypes.string,
  gender: PropTypes.string,
};

export default ConnectWith;
