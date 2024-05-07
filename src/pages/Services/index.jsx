import React from 'react';
import coolIcon from '/src/images/cool-icon.svg';
import "./style.css";


function Services() {
  return (
    <section className="services">
        <div className="container services-container">
          <div className="service-text">
            <h2 className="service-title">Services we offer</h2>
            <p className="service-desc">
              Our solutions are all about simplification and optimisation.
            </p>
            <a href="#" className="btn service-btn"
              >See Product Overview
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
              >
                <mask
                  id="a"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <path fill="currentColor" d="M0 0h24v24H0z" />
                </mask>
                <g mask="url(#a)">
                  <path
                    d="m12 16 4-4-4-4-1.4 1.4 1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6a9.738 9.738 0 0 1-3.9-.788 10.099 10.099 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.099 10.099 0 0 1 2.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0 1 12 2c1.383 0 2.683.263 3.9.788a10.098 10.098 0 0 1 3.175 2.137c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0 1 22 12a9.738 9.738 0 0 1-.788 3.9 10.098 10.098 0 0 1-2.137 3.175c-.9.9-1.958 1.613-3.175 2.137A9.738 9.738 0 0 1 12 22Z"
                    fill="currentColor"
                  />
                </g></svg>
              </a>
          </div>
          <ul className="service-cards">
            <li className="card">
              <div className="card-icon">
                <img src={coolIcon} alt="cool icon" />
              </div>
              <h2 className="service-card-title">
                Identity based <br />
                solutions
              </h2>
              <hr className="service-card-line"/>
              <p className="service-card-desc">
                A strong identification system relies on an integrated robust ID
                verification solution:...
              </p>
            </li>
            <li className="card">
              <div className="card-icon">
                <img src={coolIcon} alt="cool icon" />
              </div>
              <h2 className="service-card-title">
                Enrolment <br />
                Operations
              </h2>
              <hr className="service-card-line" />
              <p className="service-card-desc">
                Our enrolment solutions provide a wide selection of customizable
                functionality...
              </p>
            </li>
            <li className="card">
              <div className="card-icon">
                <img src={coolIcon} alt="cool icon" />
              </div>
              <h2 className="service-card-title">
                Identity Management <br />
                Solutions
              </h2>
              <hr className="service-card-line" />
              <p className="service-card-desc">
                We bring our years of experience in identity data management to
                solve...
              </p>
            </li>
            <li className="card">
              <div className="card-icon">
                <img src={coolIcon} alt="cool icon" />
              </div>
              <h2 className="service-card-title">
                Software Application <br />
                Services
              </h2>
              <hr className="service-card-line" />
              <p className="service-card-desc">
                For years we have helped transform businesses by developing
                robust...
              </p>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default Services