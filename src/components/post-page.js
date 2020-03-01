import React from "react"
import { Link } from "gatsby"
import "../styles/styles.scss"
import MenuMobile from "../components/menumobile"
import Header from "../components/header"
import Footer from "../components/footer"

const BlogPage = props => (
  <div>
    <Header />
    <MenuMobile />
    <div className="page-content">
      <div className="main-text">
        <h1>{props.blogPageTitle}</h1>
        <h2>{props.blogPageDescript}</h2>
        <img className="blog-page-image" src={props.blogPageImage}></img>
        <p>{props.blogPageText}</p>
        <div style={{ marginTop: "200px", marginBottom: "40px" }}>
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

export default BlogPage
