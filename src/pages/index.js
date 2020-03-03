import React from "react"
import "../styles/styles.scss"
import Header from "../components/header"
import MenuMobile from "../components/menumobile"
import Footer from "../components/footer"
import ImageLoader from "../components/imageLoader"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{"Your Name or Title"}</title>
    </Helmet>
    <div>
      <Header />
      <MenuMobile />
    </div>
    <div className="page-content" id="page-content">
      <div className="main-text" style={{ marginTop: "10%" }}>
        <p style={{ lineHeight: "36px", marginBottom: "60px" }} id="about">
          Here's the medium length paragraphs about yourself, this shouldn't be
          as formal imho , you have a resume for that, or maybe it should, I
          don't know pal you do you.
          <br />
          <br />A second p beacuse you need space to describe yourself dammit,
          here's a{" "}
          <a
            className="intext-link"
            href="https://www.youtube.com/watch?v=9wFwPh-KbEY"
          >
            custom link example
          </a>
          . Yeah I know slightly convoluted for a simple link but I wanted to
          customize it my way look,{" "}
          <a className="intext-link" href="https://www.google.com/">
            another one
          </a>{" "}
          and then even a third{" "}
          <a className="intext-link" href="https://www.google.com/">
            wow
          </a>{" "}
          . Dots and commas outside the a tag. <br />
          <br /> I don't know what to write again so here's the lyrics of the
          song I'm listening to right now: Hey, won't you call me back? 'Cause
          I've been waiting for a text back It hurts my brain This chick who
          plays bass.
        </p>
        <h5 className="section-title" id="experience">
          Section Title
        </h5>

        <div className="blog-post-container">
          <h1 className="post-title" id="post0-title">
            First cool thing you'd like to show
          </h1>
          <p className="post-description" id="post0-desc">
            I worked at a Los Angeles based company on an iOS app and this is
            what I learned.{" "}
          </p>
          <ImageLoader Photo={require("../images/octiheadline.png")} />
        </div>

        <div className="blog-post-container">
          <h1 className="post-title" id="post1-title">
            Second cool thing you'd like to show
          </h1>
          <p className="post-description" id="post1-desc">
            How with a thoughtful, modular design system I managed to keep
            consistency in the very broad and feature-rich experience at SaaS
            platform Nuvyta.
          </p>
          <ImageLoader Photo={require("../images/components.png")} />
        </div>
        <a
          className="cta-button"
          id="cta-buttonid"
          href="https://drive.google.com/file/d/1VDWtZgTrU-uSt873jotFUrF_yXhMXpWq/view?usp=sharing"
          target="_blank"
          rel="noopener"
        >
          Button
        </a>
        <h5 className="section-title" id="projectsy">
          Section Title
        </h5>
        <div className="blog-post-container">
          <h1 className="post-title" id="post2-title">
            Third cool thing you'd like to show
          </h1>
          <p className="post-description" id="post2-desc">
            Track your subscriptions with this new SwiftUI app, available on the
            Appstore.
          </p>
          <ImageLoader Photo={require("../images/billtrcker.png")} />
        </div>
        <div className="blog-post-container">
          <h1 className="post-title" id="post3-title">
            Another cool thing you'd like to show
          </h1>
          <p className="post-description" id="post3-desc">
            Get a full-stack web app working in minutes.
          </p>
          <ImageLoader Photo={require("../images/herokuconsole.png")} />
        </div>
        <div></div>
        <div style={{ marginTop: "100px", marginBottom: "80px" }}>
          <h5 className="section-title">Hi there:</h5>
          <p id="internship">
            If you're interested in what I do or have a project I could take
            part in during summer 2020 please{" "}
            <a
              class="intext-link"
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
