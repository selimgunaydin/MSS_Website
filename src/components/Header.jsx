import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowDown,
  faCube,
  faBars,
  faClose,
  faTimesCircle,
  faPlusSquare,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState("");

  function handleMobileMenu() {
    if (mobileMenuIsOpen == "") {
      setMobileMenuIsOpen("active");
    } else {
      setMobileMenuIsOpen("");
    }
  }

  return (
    <>
      <div id="header" className="d-none d-lg-block">
        <motion.div
          initial={{ top: -100 }}
          animate={{ top: 0 }}
          transition={{ duration: 0.5 }}
          className={`header-sticky rounded-3 bg-white d-flex align-items-center position-fixed`}
        >
          <div className="container-fluid p-3">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="header-start logo d-flex justify-content-start">
                  <a href="#" className="text-decoration-none display-6 ">
                    <FontAwesomeIcon
                      icon={faCube}
                      color="#82cefd"
                      className="me-3"
                    />
                    <span className="text-secondary ms-2">M S S </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <div className="header-middle justify-content-center">
                  <ul className="list-unstyled m-0 d-flex justify-content-center">
                    <li className="me-5">
                      <a
                        href="#hero"
                        className="text-decoration-none text-secondary fw-semibold"
                      >
                        Ana Sayfa
                      </a>
                    </li>
                    <li className="me-5">
                      <a
                        href="#industries"
                        className="text-decoration-none text-secondary fw-semibold"
                      >
                        Hizmetlerimiz
                        {/* <FontAwesomeIcon icon={faAngleDown} className="ms-1" /> */}
                      </a>
                    </li>
                    <li className="me-5">
                      <a
                        href="#about"
                        className="text-decoration-none text-secondary fw-semibold"
                      >
                        Hakkımızda
                      </a>
                    </li>
                    <li className="me-5">
                      <a
                        href="#projects"
                        className="text-decoration-none text-secondary fw-semibold"
                      >
                        Projelerimiz
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="header-end d-flex justify-content-end align-items-center">
                  <a
                    href="#"
                    className="d-none d-xl-block text-decoration-none me-5 text-black"
                  >
                    EN
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="ms-1"
                      color="blue"
                    />
                  </a>
                  <motion.a
                    animate={{
                      x: [-5, 5, -5], // X eksenindeki sallanma hareketi
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity, // Sürekli tekrar etmesini sağlar
                    }}
                    target="_blank"
                    href="https://wa.me/+905312851812"
                    className="header-button btn btn-white px-4 py-3 fw-semibold rounded-3"
                  >
                    Bize Ulaşın
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="d-lg-none bg-white">
        <div className="navbar-mobile container-fluid ">
          <div className="row align-items-center justify-content-center">
            <div className="col-6">
              <div className="logo">
                <a href="#" className="text-decoration-none display-6 ">
                  <FontAwesomeIcon
                    icon={faCube}
                    color="#82cefd"
                    className="me-3"
                  />
                  <span className="text-secondary ms-2">M S S </span>
                </a>
              </div>
            </div>
            <div className="col-6">
              <div className="menu d-flex justify-content-end">
                <button
                  className="mobile-menu-button btn"
                  onClick={handleMobileMenu}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mobile-menu d-lg-none flex-column pt-4 ${mobileMenuIsOpen}`}
      >
        <div className="d-flex w-100 justify-content-between align-items-center mb-5">
          <div className="logo ms-4">
            <a href="#" className="text-decoration-none display-5 ">
              <FontAwesomeIcon icon={faCube} color="#fff" className="me-3" />
              <span className="text-white ms-2">M S S </span>
            </a>
          </div>
          <div className="close-mobile-menu me-2">
            <button className="btn" onClick={handleMobileMenu}>
              <FontAwesomeIcon icon={faTimesCircle} size="xl" color="#fff" />
            </button>
          </div>
        </div>
        <div className="mobile-menu-links mb-4">
          <ul className="list-unstyled px-4">
            <li className="mb-3 pb-3 d-flex align-items-center">
              <a
                onClick={handleMobileMenu}
                href="#hero"
                className="text-decoration-none text-white fw-semibold text-uppercase"
              >
                Ana Sayfa
              </a>
            </li>
            <li className="mb-3 pb-3 d-flex align-items-center">
              <a
                onClick={handleMobileMenu}
                href="#industries"
                className="d-flex justify-content-between w-100 align-items-center text-decoration-none text-white fw-semibold text-uppercase"
              >
                Hizmetlerimiz
              </a>
            </li>
            <li className="mb-3 pb-3 d-flex align-items-center">
              <a
                onClick={handleMobileMenu}
                href="#about"
                className="text-decoration-none text-white fw-semibold text-uppercase"
              >
                Hakkımızda
              </a>
            </li>
            <li className="mb-3 pb-3 d-flex align-items-center">
              <a
                onClick={handleMobileMenu}
                href="#projects"
                className="text-decoration-none text-white fw-semibold text-uppercase"
              >
                Projelerimiz
              </a>
            </li>
          </ul>
        </div>
        <div className="mobile-menu-contact d-flex flex-column px-4">
          <h3 className="text-secondary text-uppercase fw-semibold mb-4">
            İLETİŞİM
          </h3>
          <div className="contact">
            <div className="contact-item d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faStar} color="#FFDC60" />
              <p className="ms-3 mb-0 text-white">Bahçeşehir / İstanbul</p>
            </div>
            <div className="contact-item d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faStar} color="#FFDC60" />
              <p className="ms-3 mb-0 text-white">+90 531 285 1812</p>
            </div>
            <div className="contact-item d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faStar} color="#FFDC60" />
              <p className="ms-3 mb-0 text-white">info@mssdev.online</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
