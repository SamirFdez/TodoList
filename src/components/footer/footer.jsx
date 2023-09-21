import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaInstagram } from "react-icons/fa6";

export const Footer = () => {

    const variable1 = 2
    const variable2 = 2


  return (
    <>  

   
    <br/> <br/> <br/>
        <section className="d-flex justify-content-between p-4" style={{backgroundColor: "#60B7FF"}}>
            <Container>
                <Row className="textFooter">
                    <Col xs={4}>
                        {variable1 + variable2}
                    </Col>
                    <Col xs={{ span: 4, offset: 4 }}>
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
