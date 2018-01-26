import React from 'react'
import About from './about'
import Aday from './aday'
import Contact from './contact'
import Fellows from '../components/Fellows'
import Aptigram from './aptigram'

const getNodesFromEdges = ({ edges }) => {
  return edges.map(edge => edge.node)
}

const getPageForName = ({ edges: pages }, name) => {
  const result = pages.filter(x => x.node.name === name)[0]
  return result
    ? {
        header: result.node.header,
        content: result.node.content.childMarkdownRemark.html,
      }
    : {}
}

const IndexPage = ({ data }) => (
  <div>
    <About />
    <Aday />
    <Fellows
      content={getPageForName(data.pages, 'Fellows')}
      fellows={getNodesFromEdges(data.fellows)}
    />
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
    pages: allContentfulPage {
      edges {
        node {
          id
          header
          name
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

export default IndexPage
