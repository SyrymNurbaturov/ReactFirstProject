import React from 'react';
import './App.css';
import Routers from "./Routers";
import LayoutComponents from "./components/LayoutComponents";

function App() {
  return (
    <LayoutComponents>
      <Routers/>    
    </LayoutComponents>
  );
}

export default App;
