import React from 'react';
import Clock from './comp/clock';
import Bookmark from './comp/bookmark';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -60%);
`;

function App() {
  return (
    <>
      <Clock />
      <List>
        <Bookmark />
      </List>
    </>
  );
}

export default App;
