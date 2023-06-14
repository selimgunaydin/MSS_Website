import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowDown,
  faCube,
  faBars
} from "@fortawesome/free-solid-svg-icons";


export default function Header() {
  return (
    <>
      <div className="d-none d-lg-block">
        <div className="header-sticky rounded-3 bg-white d-flex align-items-center">
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
                        href="#"
                        className="text-decoration-none text-secondary fw-semibold"
                      >
                        Ana Sayfa
                      </a>
                    </li>
                    <li className="me-5">
                      <a
                        href="#"
                        className="text-decoration-none text-secondary fw-semibold"
                      >
                        Hizmetlerimiz
                        <FontAwesomeIcon icon={faAngleDown} className="ms-1" />
                      </a>
                    </li>
                    <li className="me-5">
                      <a
                        href="#"
                        className="text-decoration-none text-secondary fw-semibold"
                      >
                        Projelerimiz
                      </a>
                    </li>
                    <li className="me-5">
                      <a
                        href="#"
                        className="text-decoration-none text-secondary fw-semibold"
                      >
                        Hakkımızda
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="header-end d-flex justify-content-end align-items-center">
                  <a href="#" className="d-none d-xl-block text-decoration-none me-5 text-black">
                    EN
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="ms-1"
                      color="blue"
                    />
                  </a>
                  <motion.button
                    animate={{
                      x: [-5, 5, -5], // X eksenindeki sallanma hareketi
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity, // Sürekli tekrar etmesini sağlar
                    }}
                    className="header-button btn btn-white px-4 py-3 fw-semibold rounded-3"
                  >
                    Bize Ulaşın
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <button className="mobile-menu-button btn">
                    <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
