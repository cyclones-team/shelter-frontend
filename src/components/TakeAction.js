import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import AnimalsCards from './AnimalCards';
import { Container, Row } from 'react-bootstrap';
import Charity from './Charity';

export class TakeAction extends Component {
    render() {
        return (
            <>
                <Header />
                <Container fluid>
                    <Row className="mb-4 ">
                        <Charity />
                    </Row>
                    <h1 className='text-center mt-5 mb-5'>pets for Adoption</h1>
                    <Row className="justify-content-center">
                        <AnimalsCards />
                    </Row>
                </Container>
                <Footer />

            </>
        )
    }
}

export default TakeAction
