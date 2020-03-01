import React from "react"
import { Link } from "gatsby"
import "../styles/styles.scss"
import MenuMobile from "../components/menumobile"
import Header from "../components/header"
import Footer from "../components/footer"
import ImageLoader from "../components/imageLoader"

const Octi = () => (
  <div>
    <Header />
    <MenuMobile />
    <div className="page-content">
      <div className="main-text">
        <h1>Octi: AR social experience</h1>
        <h3>February 9th 2020</h3>
        <h2>
          Here's what I learned working in Los Angeles on a iOS consumer AR app
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
          <h4>Imagine That!</h4>
          You kickstart a new design project with your stakeholders. The
          stakeholders are not sure what exactly they want (pretty rare huh?!
          😅). He wants a modern but elegance app that makes the user feel
          excited and safe at the same time. Moodboards are still a thing so you
          create one about the X project. You add user interfaces of similar
          apps and create a typical color schema too. The stakeholders go home
          and your responsibility is to make their partial idea come to life.
          You open your favorite design tool and start wireframing and designing
          a couple of basic screens. 60 minutes later a popup appears:
          <br />
          <h4>Imagine That!</h4>
          You kickstart a new design project with your stakeholders. The
          stakeholders are not sure what exactly they want (pretty rare huh?!
          😅). He wants a modern but elegance app that makes the user feel
          excited and safe at the same time. Moodboards are still a thing so you
          create one about the X project. You add user interfaces of similar
          apps and create a typical color schema too. The stakeholders go home
          and your responsibility is to make their partial idea come to life.
          You open your favorite design tool and start wireframing and designing
          a couple of basic screens. 60 minutes later a popup appears:
        </p>
        <div style={{ marginTop: "90px", marginBottom: "40px" }}>
          <h4 style={{ marginBottom: "-8px" }}>Hi there:</h4>
          <p>
            If you're interested in what I do or have a project I could take
            part in during summer 2020 please{" "}
            <a
              class="mailto"
              href={
                "mailto:contact@rodrigoweilg.com?subject=Hey%20Rod%2C&body=I'd%20like%20to%20talk%20to%20you%20about%20something"
              }
            >
              email me,
            </a>{" "}
            I'd love to chat about it.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default Octi
