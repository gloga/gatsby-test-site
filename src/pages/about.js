import React from 'react';

import Header from './../components/header';
import Title from './../components/title';
import Container from './../components/container';

export default ({ data }) => {
  return (
    <>
      <Header/>
      <Title content={data.site.siteMetadata.title}/>
      <Container>
        <h1>About</h1>
        <p>This is about page</p>
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