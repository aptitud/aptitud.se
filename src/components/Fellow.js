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

const serviceToFontAwesome = name => {
  if (name === 'blog') return 'globe'
  return name
}

export default ({ name, description, services, phone, blog, image }) => {
  return (
    <div
      css={`
        background-color: #fff;
        break-inside: avoid;

        p,
        h4 {
          padding: 0 20px;
        }

        p {
          font-weight: 100;
        }

        img {
          width: 100%;
        }

        h4 {
          margin: 10px 0 0 0;
          font-weight: 300;
          font-size: 1.5em;
        }

        ul {
          background-color: #eee;
          padding: 20px;
        }

        ul li {
          display: inline-block;
        }

        ul li i {
          font-size: 1.5em;
        }
      `}
    >
      <Image alt="" src={image ? image.file.url : `profile_pic.png`} />
      <h4>{name}</h4>
      {description && <p>{description.description}</p>}
      <ul>
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
        {services &&
          services.map((s, i) => (
            <li key={i}>
              <a href={s.url} target="_blank">
                <i className={`fa fa-${serviceToFontAwesome(s.name)} fa-fw`} />
              </a>
            </li>
          ))}
      </ul>
    </div>
  )
}
