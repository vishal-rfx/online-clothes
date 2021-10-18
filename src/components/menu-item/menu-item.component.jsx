import React from "react";
import { withRouter } from "react-router";
import "./menu-item.styles.scss";


// Destructuring props
function MenuItem({ title, imageUrl, size, history, match, linkUrl }) {
  console.log(match);
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
