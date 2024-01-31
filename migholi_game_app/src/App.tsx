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
      height: "100vh",
    }
  };

  return (
    <div style={page_style.border_page}>
    <BorderGame />
    </div>
   
  );
}
export default App;
