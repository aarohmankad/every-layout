import React from 'react';

import logo from './logo.svg';
import Stack from './components/Stack';
import Sidebar from './components/Sidebar';
import Cover from './components/Cover';

import './App.css';

function App() {
  return (
    <Cover minHeight="100vh" padding="1rem" margin="1rem">
      <Stack className="principal">
        <h1>How To Create A Book Cover</h1>
        <p>With Flexbox & Love</p>
      </Stack>
      <p>By Heydon Pickering and Aaroh Mankad</p>
    </Cover>
  );
}

export default App;
