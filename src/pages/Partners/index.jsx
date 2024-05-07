import React from 'react'
import veritas from '/src/images/veritas.png';
import microsoft from '/src/images/microsoft.png';
import cisco from '/src/images/cisco.png';
import vmware from '/src/images/vmware.png';
import lenovo from '/src/images/lenovo.png';
import idemia from '/src/images/idemia.png';
import neuro from '/src/images/neuro.png';
import hp from '/src/images/hp.png';
import "./style.css";
function Partners() {
  return (
    <section className="partner">
        <div className="container partner-container">
          <div className="partner-text">
            <h2 className="partner-title">Our Partners</h2>
            <p className="partner-desc">
              We bring together a team of 1st class world partners to provide
              our clients with top grade services in all aspects of our
              solutions
            </p>
          </div>
          <div className="partner-companys">
            <img
              src={veritas}
              className="veritas"
              alt="veritas company"
            />
            <img
              src={microsoft}
              className="microsoft"
              alt="microsoft company"
            />
            <img src={cisco} className="cisco" alt="cisco company" />
            <img
              src={vmware}
              className="vmware"
              alt="vmware company"
            />
          </div>
          <div className="partner-companys">
            <img
              src={lenovo}
              className="lenovo"
              alt="lenovo company"
            />
            <img
              src={idemia}
              className="idemia"
              alt="idemia company"
            />
            <img src={hp} className="hp" alt="hp company" />
            <img
              src={neuro}
              className="neuro"
              alt="neuro technology"
            />
          </div>
        </div>
    </section>
  )
}

export default Partners