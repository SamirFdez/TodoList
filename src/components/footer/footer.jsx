import React from "react";
import { Container } from "react-bootstrap";
import iconWeb from "../../assets/images/iconWeb.png";
import iconGithub from "../../assets/images/iconGithub.png";
import linkedin from "../../assets/images/linkedin.png";

export const Footer = () => {
  return (
    <>
      <section className="d-flex justify-content-between p-2 footer">
        <Container>
          <footer className="d-flex flex-wrap align-items-center py-1 my-1">
            <div className="col-12 justify-content-center d-flex align-items-center">
              <span className="mb-3 mb-md-0 textFooter">
                Designed & build by Samir Fernández
              </span>
            </div>

            <ul className="nav col-12 justify-content-center list-unstyled d-flex">
              <li className="ms-3">
                <a
                  href="http://portfolio-samirfdez.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={iconWeb} className="iconFooter" />
                </a>
              </li>
              <li className="ms-3">
                <a
                  href="https://github.com/SamirFdez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={iconGithub} className="iconFooter" />
                </a>
              </li>
              <li className="ms-3">
                <a
                  href="https://www.linkedin.com/in/samirfdez/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} className="iconFooter" />
                </a>
              </li>
            </ul>
          </footer>
        </Container>
      </section>
    </>
  );
};
