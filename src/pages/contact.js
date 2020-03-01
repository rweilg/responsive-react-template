import React from "react"
import Header from "../components/header"
import "../styles/styles.scss"
import { Link } from "gatsby"
import Footer from "../components/footer"
import MenuMobile from "../components/menumobile"
import NewHeader from "../components/newheader"

const Contact = () => (
  <div>
    <NewHeader />
    <MenuMobile />
    <div className="page-content">
      <div className="main-text" style={{ width: "604px}" }}>
        <h1>contact</h1>
        <p>
          The design has evolved throughout 2019 with collaboration and
          automation being an unbreakable part of our processes. Even AI started
          breaking into the design life with slow steps and gained a bit of
          popularity. On the other hand, the design field still remains the most
          chaotic and unstructured industry in terms of metrics. Consider the
          marketing life for a while. A good marketer starts a campaign, sets
          the objectives, create the content and automates the publishing and
          evaluation flow. Then the campaign is <bold>launched</bold>. The
          evaluation of the results is based on the outcome of A/B tests and the
          analytics metrics. The work is done and he can happily announce the
          conversions increase or the marketer admits the failure and starts
          over again.
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
          <br />
        </p>
        <div style={{ marginTop: "90px", marginBottom: "40px" }}>
          <h4 style={{ marginBottom: "-8px" }}>Hey you, yes you:</h4>
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

export default Contact
