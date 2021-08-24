import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Main from './Main';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
export class Homepage extends Component {
  componentDidUpdate = async () => {
    if (this.props.auth0.isAuthenticated === true) {
      const config = {
        headers: { 'Authorization': `Bearer ${'jwt'}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SREVER_URL,
        url: `/auth/${this.props.auth0.user.email}`,
      };
      axios(config)
        .then(axiosResults => {

          this.setState({ userData: axiosResults.data });
        })
        .catch(err => console.error(err));
    }
  }


  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default withAuth0(Homepage);
