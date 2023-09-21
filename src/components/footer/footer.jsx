import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaInstagram } from "react-icons/fa6";

export const Footer = () => {

    const numero = 10

    const holaMundo = () => {
        if(numero === 1) {
            console.log("holaMundo")
        }

    }

  return (
    <>  
        <section className="d-flex justify-content-between p-4 footer" style={{backgroundColor: "#60B7FF"}}>
            <Container>
                <Row className="textFooter">
                    <Col xs={7}>
                    Copyright © 2023 Samir Fernández. All rights reserved.
                    </Col>
                    <Col xs={5}>
                        <a href="https://www.instagram.com/samirfdezx3/" className="me-4 iconFooter">
                            <FaInstagram/>
                        </a>
                        <a href="https://github.com/SamirFdez" className="me-4 iconFooter">
                            <FaGithub/>
                        </a>
                        <a href="https://www.instagram.com/samirfdezx3/" className="me-4 iconFooter">
                            <FaInstagram/>
                        </a>
                        <a href="https://github.com/SamirFdez" className="me-4 iconFooter">
                            <FaGithub/>
                        </a>
                    </Col>
                </Row>



            </Container>
        </section>
    </>
  )
}

