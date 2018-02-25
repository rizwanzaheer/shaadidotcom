/**
 *
 * SearchUsers
 *
 */

import { Pagination } from 'antd';
import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import 'antd/lib/pagination/style/css';
import ProfileCompactView from 'components/ProfileCompactView';
import RightSidePartnerSearchContainer from 'components/RightSidePartnerSearchContainer';
import SingleProfileComponent from 'components/SingleProfileComponent';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { nodeApiServerUrl } from '../../config/envChecker';
import { USERDETAIL } from '../../config/getUserDetailFromLocalStorage';
import reducer from './reducer';
import saga from './saga';
import './SearchUsersStyle.scss';

import makeSelectSearchUsers from './selectors';

export class SearchUsers extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchByName: '',
      defaultPage: 1,
      totalPageSize: 0,
      defaultPageSize: 5,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.profileData = {
      fname: 'Rizwan',
      age: 23,
      height: 5,
      weight: 0,
      religion: 'Islam',
      motherToungue: 'Urdu',
      _id: 1,
    };
  }

  componentWillMount() {
    this.getData(0);
  }
  onChange = (page) => {
    this.getData((page - this.state.defaultPage) * this.state.defaultPageSize);
    this.setState(
      {
        current: page,
      },
    );
  };
  getData = (skipRecords) => {
    const query = new URLSearchParams(this.props.history.location.search);

    const gender = query.get('gender');
    const fromage = query.get('fromage');
    const toage = query.get('toage');
    const religion = query.get('religion');
    const mothertongue = query.get('mothertongue');
    const matrialStatus = query.get('matrialStatus');
    const community = query.get('community');
    const skintone = query.get('skintone');
    const bodytype = query.get('bodytype');
    const hairtype = query.get('hairtype');
    const familyaffluence = query.get('familyaffluence');
    const drink = query.get('drink');
    const smoke = query.get('smoke');
    const height = query.get('height');
    const bloodgroup = query.get('bloodgroup');
    const fname = query.get('fname');
    const pageType = query.get('pageType');
    if (fname) {
      axios
        .post(`${nodeApiServerUrl}/api/search/getuserbyname`, {
          fname,
          pageSizeLimit: this.state.defaultPageSize,
          skipRecords,
          // resultLimit: ,
        })
        .then((users) => {
          this.setState({
            users: users.data.users,
            totalPageSize:
              this.state.totalPageSize >= users.data.count
                ? this.state.totalPageSize
                : users.data.count,
          });
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post(`${nodeApiServerUrl}/api/search/getusersbysearchcriteria`, {
          gender,
          fromage,
          toage,
          religion,
          mothertongue,
          matrialStatus,
          community,
          skintone,
          userId:USERDETAIL._id,
          bodytype,
          hairtype,
          familyaffluence,
          drink,
          smoke,
          height,
          bloodgroup,
          pageSizeLimit: this.state.defaultPageSize,
          skipRecords,
          pageType,
        })
        .then((users) => {
          this.setState({
            users: users.data.users,
            totalPageSize:
              this.state.totalPageSize >= users.data.count
                ? this.state.totalPageSize
                : users.data.count,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  handleSubmit(e) {
    e.preventDefault();
  }

  clickHandler = () => {
    const { searchByName } = this.state;
    const newSearchByName = searchByName.toUpperCase();
    // + searchByName.slice(1)
    this.props.history.push(`searchusers?fname=${newSearchByName}`);
    window.location.reload();
  };
  render() {
    const { users, defaultPage, totalPageSize, defaultPageSize } = this.state;
    return (
      <div className="container">
        <Helmet>
          <title>SearchUsers</title>
          <meta name="description" content="Description of SearchUsers" />
        </Helmet>
        <div className="row search-users-container">
          <div className="col-4">
            <RightSidePartnerSearchContainer
              heading="Refine Search"
              footer
              btn="Search"
              clickHandler={this.clickHandler}
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput">First Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="First name"
                      onChange={(e) =>
                        this.setState({ searchByName: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </RightSidePartnerSearchContainer>
          </div>
          <div className="col-8">
            <h4>Your Search Result</h4>
            <div className="row search-users-wrapper">
              {users.map((data) => (
                <div className="row" key={data._id}>
                  <SingleProfileComponent data={data} />
                </div>
              ))}
              {users.length === 0 && (
                <h1>
                  Didn't find any User accroding to your Search Criteria!!!
                </h1>
              )}
              <div className="col-12 text-center" style={{ marginTop: '20px' }}>
                <Pagination
                  defaultCurrent={defaultPage}
                  defaultPageSize={defaultPageSize}
                  total={totalPageSize}
                  onChange={this.onChange}
                  // simple={false}
                  showTotal={(total, range) =>
                    `${range[0]}-${range[1]} of ${total} items`}
                />
              </div>
            </div>
          </div>
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

export default withRouter(
  compose(withReducer, withSaga, withConnect)(SearchUsers)
);
