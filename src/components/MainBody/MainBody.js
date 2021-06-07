import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../../redux/Actions/Actions";
import Sidebar from "../Sidebar/Sidebar";

const MainBody = () => {
  const data = useSelector((state) => state.dataReducer.data.articles);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  console.log(data);

  return (
    <Container>
      <Row>
        {/* its to article home */}
        <Col md={8}>
          <h1>These are articles</h1>
          {/* {data?.map((elm) => (
            <ArticleCard article={elm} />
          ))} */}
        </Col>

        {/* it goes to sidebar */}
        <Col md={4}>
          <Sidebar></Sidebar>
          {/* {data?.map((element) => (
            <Sidebar article={element}></Sidebar>
          ))} */}
        </Col>
      </Row>
    </Container>
  );
};

export default MainBody;
