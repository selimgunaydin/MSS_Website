import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

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
          className="header mb-5"
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
        <div className="content">
          <div className="row">
            <div className="col-12 col-lg-6 p-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="project-image"
              >
                <img
                  src="https://weblearnbd.net/tphtml/collax/collax/assets/img/project/project-6.1.jpg"
                  alt=""
                />
              </motion.div>
            </div>
            <div className="col-12 col-lg-6 p-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="project-image"
              >
                <img
                  src="https://weblearnbd.net/tphtml/collax/collax/assets/img/project/project-6.2.jpg"
                  alt=""
                />
              </motion.div>
            </div>
            <div className="col-12 col-lg-6 p-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="project-image"
              >
                <img
                  src="	https://weblearnbd.net/tphtml/collax/collax/assets/img/project/project-6.3.jpg"
                  alt=""
                />
              </motion.div>
            </div>
            <div className="col-12 col-lg-6 p-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="project-image"
              >
                <img
                  src="https://weblearnbd.net/tphtml/collax/collax/assets/img/project/project-6.4.jpg"
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
