import React from 'react';
import styled from 'styled-components';

/*
Source: https://every-layout.dev/layouts/sidebar/

Example:
<Sidebar
  space="1rem"
  contentMinWidth="50%"
  sidebarWidth="20rem"
  elastic={false}
>
  <div>Hello</div>
  <div>Hi</div>
</Sidebar>
*/

const StyledSidebar = styled.div`
  & > * {
    display: flex;
    flex-wrap: wrap;
    margin: calc(${props => props.space || '1rem'} / -2);
  }

  & > * > * {
    margin: calc(${props => props.space || '1rem'} / 2);
  }

  & > * :first-child {
    ${props =>
      props.elastic ? '' : `flex-basis: ${props.sidebarWidth || '20rem'};`}
    flex-grow: 1;
  }

  & > * :nth-child(n + 2) {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(
      ${props => props.contentMinWidth || '50%'} -
        (${props => props.space || '1rem'} / 2)
    );
  }
`;

const Sidebar = props => (
  <StyledSidebar {...props}>
    <div>{props.children}</div>
  </StyledSidebar>
);

export default Sidebar;
