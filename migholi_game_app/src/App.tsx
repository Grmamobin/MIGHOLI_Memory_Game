import BorderGame from "./pages/Boarder"
// import { Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';

function App() {

  const page_style = {
    border_page:
    {
      backgroundColor : "#0b1215",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: '100vh',
    }
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <Routes>
    //   <Route path="./border_game" element={<BorderGame />} />
    // </Routes>
    <div style={page_style.border_page}>
    <BorderGame />
    </div>
   
  );
}
export default App;
