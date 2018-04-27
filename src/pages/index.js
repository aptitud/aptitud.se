import React from 'react'
import About from '../components/About'
import Aday from '../components/Aday'
import Contact from '../components/Contact'
import PageSection from '../components/PageSection'
import Fellows from '../components/Fellows'
import Aptigram from '../components/Aptigram'

const getNodesFromEdges = ({ edges }) => {
    return edges.map(edge => edge.node)
}

const getPageForName = ({ edges: pages }, name) => {
    const result = pages.filter(x => x.node.name === name)[0]
    return result
        ? {
              header: result.node.header,
              content: result.node.content.childMarkdownRemark.html,
              image: result.node.image && result.node.image.file.url,
          }
        : {}
}

const IndexPage = ({ data }) => (
    <div>
        <About content={getPageForName(data.pages, 'About')} />
        <Aday content={getPageForName(data.pages, 'Aday')} />
        <Fellows
            content={getPageForName(data.pages, 'Fellows')}
            fellows={getNodesFromEdges(data.fellows)}
        />
        <Aptigram posts={getNodesFromEdges(data.aptigram)} />
        <Contact />
    </div>
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
    }
`

export default IndexPage
