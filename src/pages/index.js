import React from 'react'
import About from './about'
import Aday from './aday'
import Contact from './contact'
import Fellows from '../components/Fellows'
import Aptigram from './aptigram'

const getNodesFromEdges = ({ edges }) => {
  return edges.map(edge => edge.node)
}

const IndexPage = ({ data }) => (
  <div>
    <About />
    <Aday />
    <Fellows fellows={getNodesFromEdges(data.fellows)} />
    <Aptigram />
    <Contact />
  </div>
)

export const query = graphql`
  query FellowsPageQuery {
    fellows: allContentfulFellow {
      edges {
        node {
          name
          phone
          image {
            file {
              url
            }
          }
          blog
          description {
            description
          }
          services {
            name
            url
          }
        }
      }
    }
  }
`

export default IndexPage
