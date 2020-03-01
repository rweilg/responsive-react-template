import React from "react"
import "../styles/styles.scss"
import Header from "../components/header"
import MenuMobile from "../components/menumobile"
import Footer from "../components/footer"
import ImageLoader from "../components/imageLoader"

const IndexPage = () => (
  <div>
    <div>
      <Header />
      <MenuMobile />
    </div>
    <div className="page-content" id="page-content">
      <div className="main-text" style={{ marginTop: "12%" }}>
        <p style={{ lineHeight: "36px", marginBottom: "60px" }} id="about">
          I am a computer science student, product designer and developer. I
          believe in bridging engineering with user experience getting my hands
          dirty and getting things done.
          <br />
          <br />
          Currently studying at{" "}
          <a className="intext-link" href="https://www.unimi.it/eng">
            UNIMI
          </a>
          . I worked both in Italy and the US: developing new ways to create{" "}
          <a className="intext-link" href="https://www.octi.tv/">
            social interactions with AR,
          </a>{" "}
          creating a{" "}
          <a className="intext-link" href="https://www.nuvyta.it/">
            platform
          </a>{" "}
          for management of medical institutions and apps that enrich the{" "}
          <a
            className="intext-link"
            href="https://www.sky.it/assistenza/benvenuto/skyq-platinum/esperienza-sorprendente.html"
          >
            tv experience.
          </a>{" "}
          You can get here a copy of my resume.
          <br />
          <br /> I like golang, swift, python and (statically typed) javascript,
          recursive functions, CV algorithms, Switch games, easter eggs and
          biking during golden hour.
        </p>
        <h5 className="experience" id="experience">
          experience
        </h5>

        <div className="blog-post-container">
          <h1 className="post-title" id="post0-title">
            CV-powered social AR experience
          </h1>
          <p className="post-description" id="post0-desc">
            I worked at a Los Angeles based company on an iOS app and this is
            what I learned.{" "}
          </p>
          <ImageLoader Photo={require("../images/octiheadline.png")} />
        </div>

        <div className="blog-post-container">
          <h1 className="post-title" id="post1-title">
            Healthcare management platform
          </h1>
          <p className="post-description" id="post1-desc">
            How with a thoughtful, modular design system I managed to keep
            consistency in the very broad and feature-rich experience at SaaS
            platform Nuvyta.
          </p>
          <ImageLoader Photo={require("../images/components.png")} />
        </div>
        <a
          className="cv-button"
          id="cv-buttonid"
          href="https://drive.google.com/file/d/1VDWtZgTrU-uSt873jotFUrF_yXhMXpWq/view?usp=sharing"
          target="_blank"
          rel="noopener"
        >
          Here's my full CV
        </a>
        <h5 className="experience" id="projectsy">
          projects
        </h5>
        <div className="blog-post-container">
          <h1 className="post-title" id="post2-title">
            Track subscriptions
          </h1>
          <p className="post-description" id="post2-desc">
            Track your subscriptions with this new SwiftUI app, available on the
            Appstore.
          </p>
          <ImageLoader Photo={require("../images/herokuconsole.png")} />
        </div>
        <div className="blog-post-container">
          <h1 className="post-title" id="post3-title">
            Journal your emotions with your voice
          </h1>
          <p className="post-description" id="post3-desc">
            Journal your emotions with your voice.
          </p>
          <ImageLoader Photo={require("../images/octiheadline.png")} />
        </div>
        <div></div>
        <div style={{ marginTop: "100px", marginBottom: "80px" }}>
          <h4 id="contact-title" className="contact-title">
            Hi there:
          </h4>
          <p id="internship">
            If you're interested in what I do or have a project I could take
            part in during summer 2020 please{" "}
            <a
              class="mailto"
              id="mailto"
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

export default IndexPage
