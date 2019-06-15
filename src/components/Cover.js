import React from 'react';
import styled from 'styled-components';

/*
Source: https://every-layout.dev/layouts/cover/

Example:
<Cover minHeight="100vh" padding="1rem" margin="1rem">
  <Stack className="principal">
    <h1>How To Create A Book Cover</h1>
    <p>With Flexbox & Love</p>
  </Stack>
  <p>By Heydon Pickering and Aaroh Mankad</p>
</Cover>
*/

const StyledCover = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.padding || '1rem'};
  min-height: ${props => props.minHeight || '100vh'};
  box-sizing: border-box;

  & > * {
    margin-top: ${props => props.margin || '1rem'};
    margin-bottom: ${props => props.margin || '1rem'};
  }

  & > .principal {
    margin-top: auto;
    margin-bottom: auto;
  }

  & > :first-child:not(.principal) {
    margin-top: 0;
  }

  & > :last-child:not(.principal) {
    margin-bottom: 0;
  }
`;

const Cover = props => <StyledCover {...props}>{props.children}</StyledCover>;

export default Cover;
