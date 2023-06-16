import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function BrandShowcase() {
  return (
    <div className="container mb-5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="row pt-4"
      >
        <div className="d-flex justify-content-center">
          <p className="fw-semibold fs-5 text-secondary text-center mb-5">
            MSS olarak <span className="text-black">profesyonel</span> hizmet
            sunduğumuz teknolojiler
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
        className="brands pt-0 pt-lg-4"
      >
        <div className="row d-flex justify-content-center">
          <div className="d-flex row align-items-center overflow-hidden">
            <div className="brand-item col-6 col-lg-2 mb-4 d-flex justify-content-center">
              <img
                src="https://logos-download.com/wp-content/uploads/2017/07/Microsoft_.NET_logo.png"
                alt="dotnet"
                width="120px"
              />
            </div>
            <div className="brand-item col-6 col-lg-2 mb-4 d-flex justify-content-center">
              <img
                src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
                alt="react"
                width="120px"
              />
            </div>
            <div className="brand-item col-6 col-lg-2 mb-4 d-flex justify-content-center">
              <img
                src="https://s.w.org/style/images/about/WordPress-logotype-alternative.png"
                alt="wordpress"
                width="120px"
              />
            </div>
            <div className="brand-item col-6 col-lg-2 mb-4 d-flex justify-content-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                alt="bootstrap"
                width="120px"
              />
            </div>
            <div className="brand-item col-6 col-lg-2 mb-4 d-flex justify-content-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                alt="tailwind"
                width="120px"
              />
            </div>
            <div className="brand-item col-6 col-lg-2 mb-4 d-flex justify-content-center ">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/mysql-5-logo-png-transparent.png"
                alt="mssql"
                width="120px"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
