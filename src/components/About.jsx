import React from "react";
import AboutShape from "../assets/img/about-shape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import selim from "../assets/img/selim.jpeg";
import murat from "../assets/img/murat.jpeg";
import sefa from "../assets/img/sefa.jpeg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div id="about" className="about mb-5">
        <div className="about-shape d-none d-lg block">
          <img src={AboutShape} alt="" />
        </div>
        <div className="about-detail container">
          <div className="row d-flex flex-column flex-lg-row">
            <div className="col-lg-5 col-12 about-image d-flex flex-column mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="personal-data d-flex"
              >
                <img src={murat} alt="personal-image" className="col-3" />
                <div className="ps-3 col-9 info d-flex flex-column justify-content-center">
                  <h1 className="fw-semibold fs-5">Murat Baran</h1>
                  <p className="text-muted mb-2">Back-End Developer</p>
                  <div className="social-links">
                    <a
                      href="https://www.linkedin.com/in/murat-barann/"
                      target="_blank"
                      className="text-decoration-none text-muted"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                    <a
                      href="https://github.com/muratBarann"
                      target="_blank"
                      className="text-decoration-none text-muted"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="xl"
                        className="ms-3"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="personal-data d-flex"
              >
                <img src={selim} alt="personal-image" className="col-3" />
                <div className="ps-3 col-9 info d-flex flex-column justify-content-center">
                  <h1 className=" fw-semibold fs-5">Selim Günaydın</h1>
                  <p className="text-muted mb-2">Front-End Developer</p>
                  <div className="social-links">
                    <a
                      href="https://www.linkedin.com/in/selimgunaydin/"
                      target="_blank"
                      className="text-decoration-none text-muted"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                    <a
                      href="https://github.com/selimgunaydin"
                      target="_blank"
                      className="text-decoration-none text-muted"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="xl"
                        className="ms-3"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="personal-data d-flex"
              >
                <img src={sefa} alt="personal-image" className="col-3" />
                <div className="ps-3 col-9 info d-flex flex-column justify-content-center">
                  <h1 className=" fw-semibold fs-5">Sefa Tektaş</h1>
                  <p className="text-muted mb-2">Back-End Developer</p>
                  <div className="social-links">
                    <a
                      href="https://www.linkedin.com/in/sfatektas/"
                      target="_blank"
                      className="text-decoration-none text-muted"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                    <a
                      href="https://github.com/sfatektas"
                      target="_blank"
                      className="text-decoration-none text-muted"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="xl"
                        className="ms-3"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="col-12 col-lg-7 about-content">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="title d-flex align-items-center mb-4"
              >
                <FontAwesomeIcon icon={faDotCircle} color="#ffdc60" />
                <h1 className="fw-regular mb-0 ms-2 text-secondary">
                  Hakkımızda
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="subtitle mb-4"
              >
                <h3 className="fw-bold display-5 text-secondary">
                  <span className="text-black">M</span>urat & <span className="text-black">S</span>efa & <span className="text-black">S</span>elim 
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="content mb-4"
              >
                <p className="text-secondary fs-5">
                  Kullanıcı deneyimini (UX) ön planda tutan, sade ve kreatif
                  tasarım anlayışımızı, ekibimizin ürettiği akıllı yazılım teknolojileri ile
                  birleştirirerek sürdürülebilir ve fark yaratan web tasarım ve
                  mobil uygulama projeleri üretiyor ve destek sağlıyoruz.
                </p>
              </motion.div>
              <a
                target="_blank"
                href="https://wa.me/+905312851812"
                className="btn about-button px-5 py-4 text-white"
              >
                Bize ulaşın
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
