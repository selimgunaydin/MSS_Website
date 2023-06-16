import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Industries() {
  return (
    <div className="container industries mb-5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="title text-center mb-5"
      >
        <h1 className="fw-bold display-5">Endüstriler</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="row content justify-content-center text-align-center"
      >
        <div className="col-12 d-flex justify-content-center flex-wrap">
          <div className="industries-item d-flex align-items-center bg-white m-3">
            <FontAwesomeIcon
              className="bounce"
              icon={faDotCircle}
              color="#82CEFD"
              size="xl"
            />
            <p className="mb-0 ms-3 fs-5">Sağlık Endüstrisi</p>
          </div>
          <div className="industries-item d-flex align-items-center bg-white m-3">
            <FontAwesomeIcon
              className="bounce"
              icon={faDotCircle}
              color="#FFDC60"
              size="xl"
            />
            <p className="mb-0 ms-3 fs-5">Emlak Danışmanlığı</p>
          </div>
          <div className="industries-item d-flex align-items-center bg-white m-3">
            <FontAwesomeIcon
              className="bounce"
              icon={faDotCircle}
              color="#5956E9"
              size="xl"
            />
            <p className="mb-0 ms-3 fs-5">Üretim</p>
          </div>
          <div className="industries-item d-flex align-items-center bg-white m-3">
            <FontAwesomeIcon
              className="bounce"
              icon={faDotCircle}
              color="#FD346E"
              size="xl"
            />
            <p className="mb-0 ms-3 fs-5">Bankacılık</p>
          </div>
          <div className="industries-item d-flex align-items-center bg-white m-3">
            <FontAwesomeIcon
              className="bounce"
              icon={faDotCircle}
              color="#57c9da"
              size="xl"
            />
            <p className="mb-0 ms-3 fs-5">Matbaa</p>
          </div>
          <div className="industries-item d-flex align-items-center bg-white m-3">
            <FontAwesomeIcon
              className="bounce"
              icon={faDotCircle}
              color="#423EF3"
              size="xl"
            />
            <p className="mb-0 ms-3 fs-5">Otomasyon</p>
          </div>
          <div className="industries-item d-flex align-items-center bg-white m-3">
            <FontAwesomeIcon
              className="bounce"
              icon={faDotCircle}
              color="#FFADAD"
              size="xl"
            />
            <p className="mb-0 ms-3 fs-5">Müşteri Hizmetleri</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
