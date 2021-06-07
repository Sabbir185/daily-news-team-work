import React from "react";
import { useHistory } from "react-router-dom";
import "./ArticleCard.css";

const ArticleCard = ({ article }) => {
  const history = useHistory();
  const { publishedAt, urlToImage, title } = article;
  return (
    <div
      className="article-card"
      onClick={() => history.push("/blog/" + publishedAt)}
    >
      <img src={urlToImage} alt="" />
      <h6>{title}</h6>
    </div>
  );
};

export default ArticleCard;
