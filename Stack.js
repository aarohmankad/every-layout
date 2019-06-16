import React from 'react';
import styled from 'styled-components';

/*
Source: https://every-layout.dev/layouts/stack/

Example:
<Stack space="1.5rem">
  <h2>Header</h2>
  <img src={logo} className="App-logo" />
  <p>Paragraph</p>
</Stack>;
*/

const StyledStack = styled.div`
  --space: ${props => props.space || '1rem'};

  & > * {
    margin: 0;
  }

  & > * + * {
    margin-top: var(--space);
  }
`;

const Stack = props => <StyledStack {...props}>{props.children}</StyledStack>;

export default Stack;
