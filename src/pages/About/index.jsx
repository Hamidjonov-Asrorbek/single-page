import React from 'react';
import frame from '/src/images/Frame.svg';
import "./style.css";



function About() {
  return (
    <section className="who-are">
        <div className="container who-are-container">
          <h2 className="who-are-title">Who Are We</h2>
          <p className="who-are-desc">
            Identiko is a leading player in the Information and Communications
            Technology space. We have in depth experience in the design,
            development, implementation and management of Identity management
            systems and have developed deep partnerships with the best of class
            companies in the world including NEC, Veridos, Microsoft, Oracle,
            EMC, IBM, HP and others. We bring together all this experience to
            create world class solutions that meet the needs of our clients
            today and enable them to lead in the emerging knowledge driven
            society of tomorrow
          </p>
          <a href="#" className="btn who-are-btn"
            >Read More
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
          <div className="who-are-cards">
            <div className="who-are-card">
              <h2 className="who-card-title">Quality Solutions</h2>
              <div className="who-are-desc-card">
                <div className="who-are-card-list">
                  <p className="who-card-item">Reliability</p>
                  <img src={frame} alt="Frame" />
                </div>
                <div className="who-are-card-list">
                  <p className="who-card-item">Availability</p>
                  <img src={frame} alt="Frame" />
                </div>
                <div className="who-are-card-list">
                  <p className="who-card-item">Serviceability</p>
                  <img src={frame} alt="Frame" />
                </div>
                <div className="who-are-card-list">
                  <p className="who-card-item">Durability</p>
                  <img src={frame} alt="Frame" />
                </div>
              </div>
            </div>
            <div className="who-are-card">
              <h2 className="who-card-title">Quality Delivery</h2>
              <div className="who-are-desc-card">
                <div className="who-are-card-list">
                  <p className="who-card-item">On-time Delivery</p>
                  <img src={frame} alt="Frame" />
                </div>
                <div className="who-are-card-list">
                  <p className="who-card-item">Seamless</p>
                  <img src={frame} alt="Frame" />
                </div>
                <div className="who-are-card-list">
                  <p className="who-card-item">Secure</p>
                  <img src={frame} alt="Frame" />
                </div>
                <div className="who-are-card-list">
                  <p className="who-card-item">Extensive Support</p>
                  <img src={frame} alt="Frame" />
                </div>
              </div>
            </div>
            <div className="who-are-card">
              <h2 className="who-card-title">Quality Results</h2>
              <div className="who-are-desc-card">
                <div className="who-are-card-list">
                  <p className="who-card-item">Measurable Results</p>
                  <img src={frame} alt="Frame" />
                </div>
                <div className="who-are-card-list">
                  <p className="who-card-item">Optimization</p>
                  <img src={frame} alt="Frame" />
                </div>
                <div className="who-are-card-list">
                  <p className="who-card-item">Satisfaction</p>
                  <img src={frame} alt="Frame" />
                </div>
                <div className="who-are-card-list">
                  <p className="who-card-item">Innovation</p>
                  <img src={frame} alt="Frame" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About