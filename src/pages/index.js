import React from 'react'
import Logo from '../components/Logo'
import About from '../components/About'
import Aday from '../components/Aday'
import Contact from '../components/Contact'
import Fellows from '../components/Fellows'
import Aptigram from '../components/Aptigram'

const getPageForName = ({ edges: pages }, name) => {
  const result = pages.find(x => x.node.name === name)
  return result
    ? {
        header: result.node.header,
        content: result.node.content.childMarkdownRemark.html,
        image: result.node.image && result.node.image.file.url,
      }
    : {}
}

export default ({ data }) => (
  <main>
    <Logo socialIcons={data.socialIcons.edges.map(e => e.node)} />
    <About content={getPageForName(data.pages, 'About')} />
    <Aday content={getPageForName(data.pages, 'Aday')} />
    <Fellows
      content={getPageForName(data.pages, 'Fellows')}
      fellows={data.fellows.edges.map(e => e.node)}
    />
    <Aptigram posts={data.aptigram.edges.map(e => e.node)} />
    <Contact
      content={data.contact.edges[0].node}
      socialIcons={data.socialIcons.edges.map(e => e.node)}
    />
  </main>
)

export const query = graphql`
  query IndexPageQuery {
    aptigram: allInstagramJson {
      edges {
        node {
          id
          url
          caption
          location
        }
      }
    }
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
          image {
            file {
              url
            }
          }
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    socialIcons: allContentfulSocialIcon {
      edges {
        node {
          id
          name
          link
          icon {
            file {
              url
            }
          }
        }
      }
    }
    contact: allContentfulContact {
      edges {
        node {
          id
          header
          name
          image {
            file {
              url
            }
          }
          postalAddress {
            childMarkdownRemark {
              html
            }
          }
          visitingAddress {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
