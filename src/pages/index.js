import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="https://img1.nickiswift.com/img/gallery/talk-show-hosts-reveal-their-worst-guests-ever/intro-1571328001.jpg"
      />
    </Layout>
  )
}

export default IndexPage