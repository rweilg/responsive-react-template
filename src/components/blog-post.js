import React from "react"
import { Link } from "gatsby"
import "../styles/styles.scss"

function BlogPost(props) {
  return (
    <div className="blog-post-container">
      <Link to={props.postURL}>
        <h4 className="post-section">{props.section}</h4>
        <h1 className="post-title"> {props.title}</h1>
        <p className="post-description" id="post-descriptionid">
          {props.description}
        </p>
        <img className="post-image" src={props.imageURL}></img>
        <hr />
      </Link>
    </div>
  )
}

export default BlogPost
