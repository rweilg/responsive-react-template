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

        <div className="section">
          <h5 className="section-title">Section Title</h5>

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
            href="https://google.com/"
            target="_blank"
            rel="noopener"
          >
            Button
          </a>
        </div>

        <div className="section">
          <h5 className="section-title">Section Title</h5>

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
        </div>

        <div className="section">
          <h5 className="section-title">Section Title</h5>
          <p>
            Here you can put some text or your contact info. Like email, phone,
            pigeon. Or some more lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nam ac ante mollis, fringilla nibh sed, tempor
            tellus. Pellentesque mi magna, dignissim ut porta sed, dignissim id
            neque{" "}
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
)

export default IndexPage
