import React from "react"
import "../styles/styles.scss"
import Header from "../components/header"
import SideMenu from "../components/menumobile"
import Footer from "../components/footer"
import ImageLoader from "../components/imageLoader"
import { Helmet } from "react-helmet"

const Page1 = () => (
  <div>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Page 1"}</title>
      </Helmet>
      <Header />
      <SideMenu />
    </div>
    <div className="page-content" style={{ marginTop: "68px" }}>
      <div className="main-text"></div>
    </div>
  </div>
)

export default Page1
