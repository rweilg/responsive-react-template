import React from "react"
import "../styles/styles.scss"
import Header from "../components/header"
import SideMenu from "../components/menumobile"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"
import Post from "../components/post"

const IndexPage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{"Your Name or Title"}</title>
    </Helmet>
    <div>
      <Header />
      <SideMenu />
    </div>

    <Footer />
  </div>
)

export default IndexPage
