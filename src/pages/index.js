import React from "react"
import "../styles/styles.scss"
import Header from "../components/header"
import SideMenu from "../components/menumobile"
import Footer from "../components/footer"
import ImageLoader from "../components/imageLoader"
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

        <Post
          Title="First cool thing you'd like to show"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ante
          mollis, fringilla nibh sed, tempor tellus."
          ImageURL={require("../images/octiheadline.png")}
        />

        <Post
          Title="Second cool thing"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ante
          mollis, fringilla nibh sed, tempor tellus. Pellentesque mi magna,
          dignissim ut porta sed, dignissim id neque"
          ImageURL={require("../images/components.png")}
        />

        <a
          className="cta-button"
          id="cta-buttonid"
          href="https://google.com/"
          target="_blank"
          rel="noopener"
        >
          Button
        </a>
        <h5 className="section-title" id="projectsy">
          Section Title
        </h5>

        <Post
          Title="Third cool thing"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ante
          mollis, fringilla nibh sed, tempor tellus. Pellentesque mi magna,
          dignissim ut porta sed, dignissim id neque"
          ImageURL={require("../images/billtrcker.png")}
        />

        <Post
          Title="Another cool thing you'd like to show"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ante
          mollis, fringilla nibh sed, tempor tellus."
          ImageURL={require("../images/herokuconsole.png")}
        />

        <div></div>
        <div style={{ marginTop: "100px", marginBottom: "80px" }}>
          <h5 className="section-title">Section Title</h5>
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
