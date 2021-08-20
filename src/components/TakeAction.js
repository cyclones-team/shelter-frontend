import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import Animal from './Animal';
import { Container, Row } from 'react-bootstrap';
import Charity from './Charity';

export class TakeAction extends Component {
    render() {
        return (
            <>
<Header/>
<Container fluid>
    <Row className="mb-4 ">
        <Charity/>

    </Row>
    <Row  className="justify-content-center">
        <Animal/>
    </Row>
</Container>
<Footer/>
                
            </>
        )
    }
}

export default TakeAction
