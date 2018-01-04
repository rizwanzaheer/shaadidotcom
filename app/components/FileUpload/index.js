/**
 *
 * FileUpload
 *
 */

import React from 'react';
// import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import FormData from 'form-data';
import axios from 'axios';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { nodeApiServerUrl } from '../../config/envChecker';

class FileUpload extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      // accepted: [],
      // rejected: []
    };
  }
  onDrop(files) {
    // const file = new FormData();
    // file.append('name', files[0]);
    // const req = request.post(`${nodeApiServerUrl}/api/upload`).send(file);
    // req.end((err, response) => {
    //   console.log('upload done!!!!!');
    // });

    const form = new FormData();
    files.forEach((file) => {
      form.append(file.name, file);
    });
    form.append('foo', 'bar');
    console.log('working');
    axios
      .post(`${nodeApiServerUrl}/api/upload`, form, {
        headers: {
          'Content-Type': form.type,
        },
      })
      .then((success) => {
        console.log('success :', success);
      })
      .catch((err) => {
        console.log('error: ', err);
      });

    // const photo = new FormData();
    // photo.append('photo', files[0]);

    // request.post(`${nodeApiServerUrl}/api/upload`)
    // .send(photo)
    // .end(function(err, resp) {
    //   if (err) { console.error(err); }
    //   return resp;
    // });

    this.setState(
      {
        files,
      },
      () => {
        console.log(this.state);
      }
    );
  }
  onSubmit() {
    const photo = new FormData();
    const files = this.state.files;
    photo.append('photo', files[0]);

    request
      .post(`${nodeApiServerUrl}/api/upload`)
      .send(photo)
      .end((err, resp) => {
        if (err) {
          console.error(err);
        }
        return resp;
      });
  }
  render() {
    return (
      <div>
        <div className="dropzone">
          <Dropzone
            // className="ignore"
            // disableClick={this.props.disableClick}
            onDrop={this.onDrop}
            multiple={false}
            accept={'image/*'}
          >
            <p>
              Try dropping some files here, or click to select files to upload.
            </p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {this.state.files.map((f) => (
              <li key={f.name}>
                {f.name} - {f.size} bytes
              </li>
            ))}
          </ul>
        </aside>
        <button onClick={this.onSubmit}>click me</button>
      </div>
    );
  }
}

FileUpload.propTypes = {};

export default FileUpload;
