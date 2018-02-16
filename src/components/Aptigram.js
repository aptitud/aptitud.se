import React from 'react'
import Section from './Section'

const InstagramImage = ({ caption, location, url }) => (
    <div className="col s6 m4 l2 polariod">
        <a href="http://www.instagram.com/aptitud_sthlm/" title={caption}>
            <img src={url} />
            <span className="location">{location}</span>
        </a>
    </div>
)

class Aptigram extends React.Component {
    render() {
        const { posts } = this.props

        return (
            <Section id="aptigram" heading="Aptigram">
                <div className="rows polaroids">
                    {posts.map(x => <InstagramImage key={x.id} {...x} />)}
                </div>
            </Section>
        )
    }
}

export default Aptigram
