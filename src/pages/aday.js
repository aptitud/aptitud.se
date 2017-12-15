import React from 'react'
import Section from '../components/Section'
import Image from '../components/Image'

class Aday extends React.Component {
  render() {
    return (
      <Section id="aptitud-day" heading="Roligare">
        <p>
          Vi gillar att umgås med varandra. Att få skratta och bli inspirerade
          och utmanade. Därför lägger vi mycket tid och pengar på konferenser
          och vår Aptituddag.
        </p>

        <div className="section-img-container">
          <Image.Section path="aptituddagen_rotated.png" />
        </div>

        <p>
          Aptituddagen är en arbetsdag i månaden när vi lämnar våra kunduppdrag
          och ses i butiken och gör saker tillsammans. För att det är kul och
          för att bli inspirerade. Vi testar nya ramverk, bygger saker, läser,
          diskuterar och ventilerar.
        </p>
        <p>
          Vi börjar dagen med att sätta agendan och kolla av vilka projekt som
          är igång och vad det finns för roliga idéer som behöver realiseras.
        </p>

        <p>
          Vi åker även på tre konferenser om året. En av dem är alltid en
          branschkonferens i stil med Öredev, GOTO eller NDC och fokus är
          inspiration och utveckling. På våra andra två konferenser fokuserar vi
          på att umgås och lära känna varandra bättre, att syna oss själva och
          se vart vi är på väg och vad vi ska fokusera på.
        </p>
        <p>För oss är konferenser arbetstid och därför åker vi på arbetstid.</p>
      </Section>
    )
  }
}

export default Aday
