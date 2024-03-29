import React from "react";
import { Col, Row } from "react-bootstrap";
import HomeContent from "./HomeContent";
import { useSelector } from "react-redux";

function MainContentHome() {
  const { search, searchQuery } = useSelector((state) => state.search);

  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage">
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <a href="#trending">TRENDING</a>
          <a href="#podcast">PODCAST</a>
          <a href="#moods">MOODS AND GENRES</a>
          <a href="#new">NEW RELEASES</a>
          <a href="#discover">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="searchResults">
            {search && <h2>Search Results</h2>}
            <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {search && <HomeContent query={searchQuery} />}
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              <HomeContent query={"Guns N' Roses"} />
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              <HomeContent query={"Grimes"} />
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              <HomeContent query={"Hans Zimmer"} />
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
}

export default MainContentHome;