import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDotCircle,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import sg from "../assets/img/SG.png";
import gunaydin from "../assets/img/gunaydin.png";
import mss from "../assets/img/MSS.png";
import businessTracking from "../assets/img/business_tracking.png";
import hasTesisat from "../assets/img/has_tesisat.png";

export default function Projects() {
  return (
    <>
      <div id="projects" className="projects">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="header mb-4"
        >
          <div className="title d-flex align-items-center justify-content-center text-center mb-4">
            <FontAwesomeIcon icon={faDotCircle} color="#ffdc60" />
            <h1 className="fw-regular mb-0 ms-2 text-secondary opacity-75">
              Projelerimiz
            </h1>
          </div>
          <div className="subtitle text-center d-flex justify-content-center">
            <h3 className="fw-bold display-5  w-75">Son projelerimiz</h3>
          </div>
        </motion.div>
        <div className="content container pb-2">
          <div className="row">
            <a
              href="http://e-commerce.mssdev.online/"
              target="_blank"
              className="col-12 col-lg-4 p-2"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="project-image rounded-2"
              >
                <div className="content">
                  <h1 className="text-white fs-4 text-decoration-none">
                    <span>E-Ticaret</span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      color="#fff"
                      className="ms-3"
                      size="sm"
                    />
                  </h1>
                </div>
                <img src={mss} alt="" />
              </motion.div>
            </a>
            <a
              href="http://www.selimgunaydin.com/"
              target="_blank"
              className="col-12 col-lg-4 p-2"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="project-image rounded-2"
              >
                <div className="content">
                  <h1 className="text-white fs-4 text-decoration-none">
                    <span>Kişisel Pörtföy</span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      color="#fff"
                      className="ms-3"
                      size="sm"
                    />
                  </h1>
                </div>
                <img src={sg} alt="" />
              </motion.div>
            </a>
            <a
              href="http://gunaydindekorasyon.com/"
              target="_blank"
              className="col-12 col-lg-4 p-2"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="project-image rounded-2"
              >
                <div className="content">
                  <h1 className="text-white fs-4 text-decoration-none">
                    <span>Kurumsal Tanıtım</span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      color="#fff"
                      className="ms-3"
                      size="sm"
                    />
                  </h1>
                </div>
                <img src={gunaydin} alt="" />
              </motion.div>
            </a>
            <a href="https://github.com/sfatektas/BusinessManagementApp" target="_blank" className="col-12 col-lg-4 p-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="project-image rounded-2"
              >
                <div className="content">
                  <h1 className="text-white fs-4 text-decoration-none">
                    <span>Kurumsal Yönetim</span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      color="#fff"
                      className="ms-3"
                      size="sm"
                    />
                  </h1>
                </div>
                <img
                  src={businessTracking}
                  alt=""
                />
              </motion.div>
            </a>
            <a href="https://hastesisat.com.tr/" target="_blank" className="col-12 col-lg-4 p-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="project-image rounded-2"
              >
                <div className="content">
                  <h1 className="text-white fs-4 text-decoration-none">
                    <span>Kurumsal Tanıtım</span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      color="#fff"
                      className="ms-3"
                      size="sm"
                    />
                  </h1>
                </div>
                <img
                  src={hasTesisat}
                  alt=""
                />
              </motion.div>
            </a>
            <a href="#" target="_blank" className="col-12 col-lg-4 p-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="project-image rounded-2"
              >
                <div className="content">
                  <h1 className="text-white fs-4 text-decoration-none">
                    <span>Kurumsal Tanıtım</span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      color="#fff"
                      className="ms-3"
                      size="sm"
                    />
                  </h1>
                </div>
                <img
                  src="https://weblearnbd.net/tphtml/collax/collax/assets/img/project/project-6.4.jpg"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
