import React from 'react'
import Image from './Image'
import FontAwesomeIcon from './FontAwesomeIcon'
import NoPic from '../images/profile.png'
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

const List = styled.ul`
  background-color: #eee;
  padding: 0 10px 10px 10px;

  li {
    display: inline-block;
    margin-top: 10px;
  }
`

const Wrapper = styled.div`
  background-color: #fff;
  break-inside: avoid;
  color: #000;
  > :not(img) :not(ul) {
    padding: 0 10px;
  }
`

export default ({ name, description, services, phone, image }) => (
  <Wrapper>
    <Image
      alt={name}
      css={`
        width: 100%;
        margin-bottom: 10px;
      `}
      src={image ? image.file.url + '?fm=jpg&fl=progressive&w=300&q=80' : NoPic}
    />
    <h3>{name}</h3>
    <p>{description.description}</p>
    <List>
      <li>
        <FontAwesomeIcon.Link
          onClick={e => safeUpEmailAddresses(e, name)}
          aria-label="Email"
          rel="email"
          href={`[email]${name}`}
          icon="envelope"
        />
      </li>
      {phone && (
        <li>
          <FontAwesomeIcon.Link aria-label="phone" href={`tel:${phone}`} icon="phone" />
        </li>
      )}
      {(services || []).map(s => (
        <li key={s.name}>
          <FontAwesomeIcon.Link
            rel="noopener"
            rel="noreferrer"
            href={s.url}
            aria-label={s.name}
            target="_blank"
            icon={s.name.replace('blog', 'globe')}
          />
        </li>
      ))}
    </List>
  </Wrapper>
)
