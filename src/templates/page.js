import React from "react"
import { graphql } from "gatsby"

import Header from './../components/header';
import Title from './../components/title';
import Container from './../components/container';

export default ({data}) => {
    const { wp: { page: pageData } } = data;
    
    return (
        <>
            <Header />
            <Title content={pageData.title}/>
            <Container>
                <div dangerouslySetInnerHTML={{ __html: pageData.content }} /> 
            </Container>
        </>
    );
}

export const pageQuery = graphql`
  query ($id: ID!) {
    wp {
      page(id: $id) {
        slug
        title
        excerpt
        content
        id
      }
    }
  }
`