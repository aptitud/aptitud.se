import React from 'react'
import Section from '../components/Section'
import Image from '../components/Image'

class About extends React.Component {
  render() {
    return (
      <Section id="about" heading="Enklare">
        <p>
          Det ska vara enkelt att vara konsult och vår organisation liknar mer
          ett nätverk av vänner att rådfråga, bolla idéer och ha roligt med. Vi
          som är Aptitud har en huvudsaklig uppgift – att se till att alla här
          är glada och har roligt på jobbet.
        </p>

        <div className="section-img-container">
          <Image.Section path="klotter.png" />
        </div>

        <p>
          Det finns en uppfattning om att Konsulter ska vara hos kunder 40h per
          vecka och sen vara beredda att bistå det egna bolaget med minst 10
          timmar till i veckan. Och visst, det finns bolag som gör så men det är
          inte vi. Vi räknar inte timmar. Vår tidrapportering är näst intill
          obefintlig. Vi har ingen komptid att hålla reda på. Bolagsmöten och
          konferenser sker på arbetstid och vi har inga extra arbetsuppgifter
          som vi förväntas göra utanför ordinarie arbetstid.
          <br />> Vi vill ju lägga vår energi på roliga uppdrag ute hos kunder.
        </p>
        <p>
          Vi värderar vår transparens enormt mycket. Vi litar på varandra, har
          inget att dölja och därför inget behov av kontroll. Så vi har inga
          chefer och alla har samma lönemodell som utgår från 53000:- per månad.
        </p>
        <p>Enkelhet genom tillit och transparens.</p>
      </Section>
    )
  }
}

export default About
