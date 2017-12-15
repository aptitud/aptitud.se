import React from 'React'
import Section from '../components/Section'
import Fellow from '../components/Fellow'
import data from '../data/fellows.json'

class Fellows extends React.Component {
  render() {
    return (
      <Section id="fellows" heading="Gladare">
        <p>
          Vi som är Aptitud har sökt oss hit för vi vill ha vänner istället för
          kollegor. För att vi är nyfikna, glada och skrattar mycket och för att
          vi är trygga i våra konsultroller. För att vi är seriösa utan att ta
          oss själva på för stort allvar. För att vi gillar att hela tiden
          inspireras och utvecklas. Och för att vi tycker det är våldsamt skönt
          att slippa byråkratin och administrationen som följer med en
          hierarkisk bolagsstruktur.
        </p>

        <div id="fellow-list" className="row">
          {data.map(fellow => <Fellow key={fellow.name} {...fellow} />)}
        </div>
      </Section>
    )
  }
}

export default Fellows
