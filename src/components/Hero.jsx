import React from "react";
import { motion } from "framer-motion";
import HeroShape from "../assets/img/hero-shape.webp";
import HeroImage from "../assets/img/hero-image.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <div className="hero mb-5">
      <motion.div
        initial={{ left: -250 }}
        animate={{ left: -220 }}
        transition={{ duration: 0.5 }}
        className="social d-lg-flex d-none"
      >
        <div className="d-flex align-items-center mx-5">
          <a
            className="mb-0 text-uppercase text-decoration-none text-black fw-semibold"
            href="#"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              color="#3b5998"
              className="me-3"
            />
            Facebook
          </a>
        </div>
        <div className=" d-flex align-items-center mx-5">
          {" "}
          <a
            className="mb-0 text-uppercase text-decoration-none text-black fw-semibold"
            href="#"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#c4302b"
              className="me-3"
            />
            YouTube
          </a>
        </div>
        <div className=" d-flex align-items-center mx-5">
          <a
            className="mb-0 text-uppercase text-decoration-none text-black fw-semibold"
            href="#"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              color="#00acee"
              className="me-3"
            />
            Twitter
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ right: -100 }}
        animate={{ right: 0 }}
        transition={{ duration: 0.5 }}
        className="hero-shape d-none d-lg-block"
      >
        <img src={HeroShape} alt="hero" />
      </motion.div>
      <div className="container">
        <div className="row ps-0 ps-lg-5">
          <div className="col-xl-6 col-lg-8 col-12 d-flex flex-lg-column flex-row mb-5">
            <div className="hero-box">
              <motion.h3
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="hero-text display-4 fw-bold mb-3 text-center text-lg-start"
              >
                Anahtar teslim
                <br />
                Yazılım Çözümleri üretiyoruz.
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-secondary  mb-4 lh-lg deneme"
              >
                MSS olarak, güzel, kullanışlı ürünlerin tasarımı, üretimi ve
                desteği konusunda uzmanlaşmış durumdayız. İsteklerinizi hızlı
                bir şekilde ve etkileyici bir verimlilikle gerçekleştiriyoruz.
              </motion.p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="hero-button btn btn-info px-5 px-lg-3 px-lg-5 py-3 py-lg-4 text-white"
                >
                  Bize Ulaşın
                </motion.button>
              </div>
            </div>
          </div>
          <div className="position-relative col-xl-6 col-lg-4 col-12 d-flex justify-content-end">
            <motion.div
              initial={{ x: 150 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.5,
              }}
              className="hero-image"
            >
              <img src={HeroImage} alt="heroImage" className="col-12" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
