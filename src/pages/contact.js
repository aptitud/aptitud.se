import React from 'react'
import Section from '../components/Section'
import Image from '../components/Image'

class Contact extends React.Component {
  render() {
    return (
      <Section id="contact" heading="Kontakt">
        <div className="row">
          <div className="col s12 m6">
            <Image.Section path="karta.png" />
          </div>
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Besöksadress</h3>
                <p>
                  Aptitud
                  <br /> Stora Nygatan 7
                  <br /> 111 27 Stockholm
                </p>
              </div>
              <div className="card-action">
                <a
                  href="https://www.google.se/maps/place/Stora+Nygatan+7,+111+27+Stockholm/@59.3271399,18.0506839,13.81z/data=!4m2!3m1!1s0x465f77e21038bb13:0x7addcf9e0003c278"
                  target="_blank"
                >
                  Visa karta
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Postadress</h3>
                <p>
                  Aptitud
                  <br /> Box 2057
                  <br /> 103 12 Stockholm
                </p>
              </div>
            </div>
          </div>

          <div className="col s12 links center-align">
            <a
              href="http://www.linkedin.com/company/2660293"
              target="new"
              title="LinkedIn"
            >
              <Image path="linkedin.png" alt="LinkedIn" />
            </a>
            <a
              href="http://twitter.com/Aptitud_Sthlm"
              target="new"
              title="Twitter"
            >
              <Image path="twitter.png" alt="Twitter" />
            </a>
            <a
              href="http://www.facebook.com/aptitudsthlm"
              target="new"
              title="Facebook"
            >
              <Image path="fb.png" alt="Facebook" />
            </a>
            <a
              href="http://aptitud.eventbrite.com"
              target="new"
              title="EventBrite"
            >
              <Image path="eventbrite.png" alt="EventBrite" />
            </a>
            <a
              href="http://www.youtube.com/aptitudsthlm"
              target="new"
              title="YouTube"
            >
              <Image path="youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>
      </Section>
    )
  }
}

export default Contact
