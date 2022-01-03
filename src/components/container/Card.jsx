import React from "react";

const Card = (props) => {
  // console.log("card", props);
  return (
    <div>
      <div className="news-card mb-32">
        <div className="left">
          <h2 className="news-headline mb-16">{props.article.title}</h2>
          <div className="div-block-3 mb-16">
            <div className="author">{props.article.author}</div>
            <div className="div-block-2" />
            <div className="time">{props.article.publishedAt}</div>
          </div>
          <div className="news-desc">{props.article.description}</div>
        </div>
        <div className="right">
          <div
            className="img-wrap"
            style={{ backgroundImage: `url(${props.article.urlToImage})` }}
          >
            {/* <img src="https://imagecompressor.com/images/imagecompressor/logo.svg"></img> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
