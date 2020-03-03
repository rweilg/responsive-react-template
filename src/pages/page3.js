import React from "react"
import "../styles/styles.scss"
import Header from "../components/header"
import SideMenu from "../components/menumobile"
import Footer from "../components/footer"
import ImageLoader from "../components/imageLoader"
import { Helmet } from "react-helmet"

const Page3 = () => (
  <div>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Page 3"}</title>
      </Helmet>
      <Header />
      <SideMenu />
    </div>
    <div className="page-content" style={{ marginTop: "68px" }}>
      <div className="main-text">
        <h1>Page 3 Title</h1>
        <h3>March 3rd 2020</h3>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
          dolor sed arcu elementum ornare.
        </h2>
        <ImageLoader Photo={require("../images/octiheadline.png")} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
          dolor sed arcu elementum ornare. Mauris malesuada mauris in arcu
          volutpat, in commodo augue auctor. Sed hendrerit nisl ut turpis
          sodales tristique. Vivamus pulvinar in lectus id faucibus. Suspendisse
          iaculis facilisis laoreet. Vivamus eu pulvinar velit. In pulvinar nunc
          eu libero lacinia, at congue justo mollis. Phasellus ultricies magna
          et turpis molestie, et congue ex vehicula. Sed eget elit urna. Integer
          aliquet quis nulla sed sodales.
          <br />
          <h4>Lorem ipsum again</h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
          dolor sed arcu elementum ornare. Mauris malesuada mauris in arcu
          volutpat, in commodo augue auctor. Sed hendrerit nisl ut turpis
          sodales tristique. Vivamus pulvinar in lectus id faucibus. Suspendisse
          iaculis facilisis laoreet. Vivamus eu pulvinar velit. In pulvinar nunc
          eu libero lacinia, at congue justo mollis. Phasellus ultricies magna
          et turpis molestie, et congue ex vehicula. Sed eget elit urna. Integer
          aliquet quis nulla sed sodales.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
          dolor sed arcu elementum ornare. Mauris malesuada mauris in arcu
          volutpat, in commodo augue auctor. Sed hendrerit nisl ut turpis
          sodales tristique. Vivamus pulvinar in lectus id faucibus. Suspendisse
          iaculis facilisis laoreet. Vivamus eu pulvinar velit. In pulvinar nunc
          eu libero lacinia, at congue justo mollis. Phasellus ultricies magna
          et turpis molestie, et congue ex vehicula. Sed eget elit urna. Integer
          aliquet quis nulla sed sodales.
        </p>
      </div>
    </div>
  </div>
)

export default Page3
