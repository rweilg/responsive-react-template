import React from "react"
import "../styles/styles.scss"
import { Link } from "gatsby"

const Post = props => (
  <div className="blog-post-container">
    <h1 className="post-title">{props.Title}</h1>
    <p className="post-description">{props.Description}</p>
    <img className="post-image" src={props.ImageURL}></img>
  </div>
)

export default Post
