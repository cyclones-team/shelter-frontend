import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import Main from './Main'
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
export class Homepage extends Component {
    componentDidMount = async () => {
        console.log(this.props);
        console.log('inside did mount');
        if (this.props.auth0.isAuthenticated === true) {
            console.log('auth');
            const config = {
                headers: { "Authorization": `Bearer ${'jwt'}` },
                method: 'get',
                baseURL: 'http://localhost:3020',
                url: `/auth/${this.props.auth0.user.name}`,
            }
            axios(config)
                .then(axiosResults => {
                    console.log(axiosResults.data)
                    this.setState({ userData: axiosResults.data })
                })
                .catch(err => console.error(err));

        }
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default withAuth0(Homepage)
