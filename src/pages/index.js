import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Cards from "../components/Cards"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Cards />
  </Layout>
)

export default IndexPage
