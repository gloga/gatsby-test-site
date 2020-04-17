import React from "react";
import { graphql } from "gatsby";

import Header from './../components/header';
import Title from './../components/title';
import Container from './../components/container';

export default ({ data }) => {
  
  return (
    <>
      <Header/>
      <Title content={data.site.siteMetadata.title}/>
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

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;