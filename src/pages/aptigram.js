import React from 'React'
import Section from '../components/Section'
import { get } from 'axios'

const InstagramImage = ({ Caption, Url, Location }) => (
  <div className="col s6 m4 l2 polariod">
    <a href="http://www.instagram.com/aptitud_sthlm/" title={Caption}>
      <img src={Url} />
      <span className="location">{Location}</span>
    </a>
  </div>
)

class Aptigram extends React.Component {
  state = { data: [] }
  componentDidMount() {
    get('http://aptitud.se/instagram.json')
      .then(response => response.data)
      .then(data => this.setState({ data }))
      .catch(e => console.error(e))
  }
  render() {
    const { data } = this.state
    return (
      <Section id="aptigram" heading="Aptigram">
        <div className="rows polaroids">
          {data.map(x => <InstagramImage key={x.Url} {...x} />)}
        </div>
      </Section>
    )
  }
}

export default Aptigram
