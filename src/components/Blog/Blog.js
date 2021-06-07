import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadData } from "../../redux/Actions/Actions";
import HeaderNav from "../shared/HeaderNav/HeaderNav";

const Blog = () => {
  const { date } = useParams();

  const data = useSelector((state) => state.dataReducer.data.articles);

  const blog = data?.find((blog) => blog.publishedAt === date);
  const { urlToImage, title, content, description } = blog;

  return (
    <>
      <div>
        <HeaderNav />
        <Container>
          <h1>{title}</h1>
          <img src={urlToImage} alt="" />
          <p>{content}</p>
          <p>{description}</p>
        </Container>
      </div>
    </>
  );
};

export default Blog;
