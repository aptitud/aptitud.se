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
    if (name === 'blog') {
        return 'globe'
    }
    return name
}

const FellowImage = ({ image }) => (
    <Image
        className="circle responsive-img"
        alt=""
        src={image ? image.file.url : `medarbetare/profile_pic.png`}
    />
)

const Fellow = ({ name, description, services, phone, blog, image }) => {
    return (
        <div className="fellow">
            <div className="card-panel z-depth-2 flow-text">
                <div className="info-container">
                    <div className="info">
                        <div className="heading">
                            <div>
                                <FellowImage image={image} />
                            </div>
                            <h4>{name}</h4>
                        </div>
                        {description && <p>{description.description}</p>}
                    </div>
                </div>
                <ul className="contact">
                    <li>
                        <a
                            onClick={e => safeUpEmailAddresses(e, name)}
                            rel="email"
                            href={`[email]${name}`}
                            title={`Skicka e-post till ${name}`}>
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
                                    <i
                                        className={`fa fa-${serviceToFontAwesome(
                                            s.name,
                                        )} fa-fw`}
                                    />
                                </a>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default Fellow
