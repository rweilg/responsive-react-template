import React from "react"
import "../styles/styles.scss"

const Post = props => (
  <div className="post-container">
    <h1 className="post-title">{props.Title}</h1>
    <p className="post-description">{props.Description}</p>
    <img className="post-image" src={props.ImageURL}></img>
  </div>
)

export default Post
