import React from "react"
import "../styles/styles.scss"
import Header from "../components/header"
import SideMenu from "../components/menumobile"
import Footer from "../components/footer"
import ImageLoader from "../components/imageLoader"
import { Helmet } from "react-helmet"

const Page4 = () => (
  <div>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Page 4"}</title>
      </Helmet>
      <Header />
      <SideMenu />
    </div>
    <h1>Page 4</h1>
  </div>
)

export default Page4
