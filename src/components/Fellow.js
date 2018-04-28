import React from 'react'
import Image from './Image'
import FontAwesomeIcon from './FontAwesomeIcon'
import styled from 'react-emotion'

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

const UnorderedList = ({ children }) => (
  <ul
    css={`
      background-color: #eee;
      padding: 0 10px 10px 10px;

      li {
        display: inline-block;
        margin-top: 10px;
      }
    `}
  >
    {children}
  </ul>
)

const FellowWrapper = styled.div`
  background-color: #fff;
  break-inside: avoid;
`

export default ({ name, description, services, phone, blog, image }) => (
  <FellowWrapper>
    <Image
      alt=""
      css={`
        width: 100%;
      `}
      src={image ? image.file.url : `profile_pic.png`}
    />
    <h4
      css={`
        margin: 10px 0 0 0;
        padding: 0 10px 0 10px;
        font-weight: 300;
        font-size: 2em;
      `}
    >
      {name}
    </h4>
    {description && (
      <p
        css={`
          padding: 0 10px;
        `}
      >
        {description.description}
      </p>
    )}
    <UnorderedList>
      <li>
        <FontAwesomeIcon.Link
          onClick={e => safeUpEmailAddresses(e, name)}
          rel="email"
          href={`[email]${name}`}
          icon="envelope"
        />
      </li>
      {phone && (
        <li>
          <FontAwesomeIcon.Link href={`tel:${phone}`} icon="phone" />
        </li>
      )}
      {(services || []).map(s => (
        <li key={s.name}>
          <FontAwesomeIcon.Link
            href={s.url}
            target="_blank"
            icon={s.name.replace('blog', 'globe')}
          />
        </li>
      ))}
    </UnorderedList>
  </FellowWrapper>
)
