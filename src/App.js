import React from 'react';

import logo from './logo.svg';
import Stack from './components/Stack';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  return (
    <Sidebar
      space="1rem"
      contentMinWidth="50%"
      sidebarWidth="20rem"
      elastic={false}
    >
      <div>Hello</div>
      <div>Hi</div>
    </Sidebar>
  );
}

export default App;
