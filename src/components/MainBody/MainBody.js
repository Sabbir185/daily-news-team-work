import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../../redux/Actions/Actions";
import ArticleCard from "../ArticleCard/ArticleCard";
import Sidebar from "../Sidebar/Sidebar";

const MainBody = () => {
  const data = useSelector((state) => state.dataReducer.data.articles);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadData());
  // }, []);

  return (
    <Container>
      <Row>
        <Col md={8}>
          {/* {data?.map((elm) => (
            <ArticleCard article={elm} />
          ))} */}
        </Col>
        <Col md={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default MainBody;
