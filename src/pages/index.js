import React from "react";

import Header from './../components/header';
import Title from './../components/title';
import Container from './../components/container';

export default () => {
  
  return (
    <>
      <Header/>
      <Title content='Title'/>
      <Container>
        <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
      </Container>
    </>
  );
}