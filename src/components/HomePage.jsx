import React from "react";
import Sidebar from "./Sidebar";
import MainContentHome from "./MainContentHome";
import Player from "./Player";
import Container from 'react-bootstrap/Container';
function HomePage() {
  return (
      <>
      <Container >
      <Sidebar />
          <MainContentHome />
          <Player />
      </Container>
    </>
  );
}

export default HomePage;
