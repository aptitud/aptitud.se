import React from 'react'
import Image from './Image'

const safeUpEmailAddresses = (evt, name) => {
  evt.preventDefault()
  const mailtoVal = name
    .toLowerCase()
    .replace(' ', '.')
    .replace('å', 'a')
    .replace('ä', 'a')
    .replace('ö', 'o')
    .replace('ü', 'u')

  location.href = `mailto:${mailtoVal}@aptitud.se`
}

const Fellow = ({ phone, blog, img, name, desc, services, email }) => (
  <div className="fellow">
    <div className="card-panel z-depth-2 flow-text">
      <div className="info-container">
        <div className="info">
          <div className="heading">
            <div>
              {img && (
                <Image
                  path={`medarbetare/${img}`}
                  alt=""
                  className="circle responsive-img"
                />
              )}
            </div>
            <h4>{name}</h4>
          </div>
          <p>{desc}</p>
        </div>
      </div>
      <ul className="contact">
        <li>
          <a
            onClick={e => safeUpEmailAddresses(e, name)}
            rel="email"
            href={`[email]${name}`}
            title={`Skicka e-post till ${name}`}
          >
            <i className="fa fa-envelope fa-fw" />
          </a>
        </li>
        {phone && (
          <li>
            <a href={`tel:${phone}`}>
              <i className="fa fa-phone fa-fw" />
            </a>
          </li>
        )}
        {blog && (
          <li>
            <a href={blog} target="_blank">
              <i className="fa fa-globe fa-fw" />
            </a>
          </li>
        )}
        {services &&
          services.map((s, i) => (
            <li key={i}>
              <a href={s.url} target="_blank">
                <i className={`fa fa-${s.name} fa-fw`} />
              </a>
            </li>
          ))}
      </ul>
    </div>
  </div>
)

export default Fellow
