import React, { Component } from 'react'
import Animal from './Animal';
import { Container, Row } from 'react-bootstrap';
import Charity from './Charity';

export class TakeAction extends Component {
    render() {
        return (
            <>

                <Container fluid>
                    <Row className="mb-4 ">
                        <Charity />

                    </Row>
                    <Row className="justify-content-center">
                        <Animal />
                    </Row>
                </Container>


            </>
        )
    }
}

export default TakeAction
