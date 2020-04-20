import React from 'react';
import { graphql } from 'gatsby';

import Header from './../components/header';
import Title from './../components/title';
import Container from './../components/container';

export default ({data}) => {
  console.log(data);

  return (
    <>
      <Header />
      <Title content='Blocks' />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
      </Container>
    </>
  );
}

export const query = graphql`
  query Homepage {
    wordpressPage(id: {in: "d551937f-283e-5222-8a4e-27c23cd91675"}) {
      title
      slug
      content
    }
  }
`
