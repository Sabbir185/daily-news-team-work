// import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { loadData } from "../../redux/Actions/Actions";
import ArticleCard from "../ArticleCard/ArticleCard";
import Sidebar from "../Sidebar/Sidebar";

const MainBody = ({ data }) => {
  // const data = useSelector((state) => state.dataReducer.data);

  return (
    <Container>
      <Row>
        <Col md={8} className="d-flex mt-5">
          <Row md={3} className="gs-3">
            {data?.map((elm) => (
              <ArticleCard article={elm} />
            ))}
          </Row>
        </Col>
        
        <Col md={4}>
          <Sidebar />

        </Col>
      </Row>
    </Container>
  );
};

export default MainBody;
