import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="col-12 mb-4"
            >
              <div className="title text-center">
                <h1 className="display-5 fw-bold">
                  MSS ile teknolojiyi kaçırmayın
                </h1>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="col-12 mb-4"
            >
              <div className="subtitle text-center">
                <p className="fs-5">
                  MSS'te, ışık hızında verimlilikle güzel, kullanılabilir
                  ürünlerin tasarlanması ve üretilmesi konusunda uzmanız.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="col-12 mb-5"
            >
              <div className="contact-button d-flex justify-content-center">
                <a
                  target="_blank"
                  href="https://wa.me/+905312851812"
                  className="btn px-5 py-4 text-white"
                >
                  Bize Ulaşın
                </a>
              </div>
            </motion.div>
            <div className="col-12 mb-5">
              <div className="copyright text-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="pb-4"
                >
                  © 2023 MSS , All Right Receved.
                </motion.p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="row align-items-center d-flex flex-lg-row flex-column pb-5"
            >
              <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                <div className="logo">
                  <a href="#" className="text-decoration-none display-6 ">
                    <FontAwesomeIcon
                      icon={faCube}
                      color="#82cefd"
                      className="me-3"
                    />
                    <span className="text-white ms-2">M S S </span>
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-4 d-flex justify-content-center mb-2 mb-lg-0">
                <ul className="d-flex list-unstyled">
                  <li className="ms-3 ms-lg-5">
                    <a
                      className="text-decoration-none text-white opacity-75"
                      href="#hero"
                    >
                      Ana Sayfa
                    </a>
                  </li>
                  <li className="ms-3 ms-lg-5">
                    <a
                      className="text-decoration-none text-white opacity-75"
                      href="#industries"
                    >
                      Hizmetlerimiz
                    </a>
                  </li>
                  <li className="ms-3 ms-lg-5">
                    <a
                      className="text-decoration-none text-white opacity-75"
                      href="#projects"
                    >
                      Projelerimiz
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end">
                <div className="social d-flex flex-row">
                  <div className="social-item ms-4">
                    <a href="#" className="text-white">
                      <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                  </div>
                  <div className="social-item ms-4">
                    <a href="#" className="text-white">
                      <FontAwesomeIcon icon={faTwitter} size="xl" />
                    </a>
                  </div>
                  <div className="social-item ms-4">
                    <a href="#" className="text-white">
                      <FontAwesomeIcon icon={faYoutube} size="xl" />
                    </a>
                  </div>
                  <div className="social-item ms-4">
                    <a href="#" className="text-white">
                      <FontAwesomeIcon icon={faFacebookF} size="xl" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
