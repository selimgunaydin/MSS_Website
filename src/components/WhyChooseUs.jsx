import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDotCircle,
  faLightbulb,
  faCode,
  faPeopleRoof,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <>
      <div className="container why-choose-us mb-5">
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
              Neden biz?
            </h1>
          </div>
          <div className="subtitle text-center d-flex justify-content-center">
            <h3 className="fw-bold display-5  w-75">
              İşletmeniz için mükemmel BT çözümü hizmeti ve sınırsız destek
            </h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="content"
        >
          <div className="row justify-content-around">
            <motion.div
              initial={{ bottom: -100 }}
              whileInView={{ bottom: 0 }}
              transition={{ duration: 0.5 }}
              className="card col-12 col-lg-3 mb-3 mb-lg-0 p-3"
            >
              <div className="card-content d-flex flex-column justify-content-center align-items-center">
                <div className="icon mt-5 mb-5 rounded-circle bounce">
                  <FontAwesomeIcon icon={faLightbulb} size="2x" color="#fff" />
                </div>
                <div className="card-title mb-4 d-flex justify-content-center">
                  <h3 className="fs-2 text-center">MSS kurumsal çözümler</h3>
                </div>
                <div className="card-subtitle mb-5 d-flex justify-content-center">
                  <h4 className="fs-6 text-center text-secondary opacity-75">
                    İşletmenize özel kurumsal çözümler sunuyoruz.
                  </h4>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ bottom: -100 }}
              whileInView={{ bottom: 0 }}
              transition={{ duration: 0.5 }}
              className="card col-12 col-lg-3 mb-3 mb-lg-0 p-3"
            >
              <div className="card-content d-flex flex-column justify-content-center align-items-center">
                <div className="icon mt-5 mb-5 rounded-circle bounce">
                  <FontAwesomeIcon icon={faCode} size="2x" color="#fff" />
                </div>
                <div className="card-title mb-4 d-flex justify-content-center">
                  <h3 className="fs-2 text-center">Web, Masaüstü geliştirme</h3>
                </div>
                <div className="card-subtitle mb-5 d-flex justify-content-center">
                  <h4 className="fs-6 text-center text-secondary opacity-75">
                    Web, Masaüstü uygulamalarınızı geliştiriyoruz.
                  </h4>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ bottom: -100 }}
              whileInView={{ bottom: 0 }}
              transition={{ duration: 0.5 }}
              className="card col-12 col-lg-3 mb-3 mb-lg-0 p-3"
            >
              <div className="card-content d-flex flex-column justify-content-center align-items-center">
                <div className="icon mt-5 mb-5 rounded-circle bounce">
                  <FontAwesomeIcon icon={faPeopleRoof} size="2x" color="#fff" />
                </div>
                <div className="card-title mb-4 d-flex justify-content-center">
                  <h3 className="fs-2 text-center">
                    Sınırsız destek ve yönetim
                  </h3>
                </div>
                <div className="card-subtitle mb-5 d-flex justify-content-center">
                  <h4 className="fs-6 text-center text-secondary opacity-75">
                    MSS olarak ürünlerimize sınırsız destek sunuyoruz.
                  </h4>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
