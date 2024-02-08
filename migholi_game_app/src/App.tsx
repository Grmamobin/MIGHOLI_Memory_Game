import React from 'react';
import './App.css';
import { Route, Routes , BrowserRouter  } from "react-router-dom";
import BorderGame from "./pages/Boarder"
import MainPage from './pages/menu';


function App() {

  const page_style = {
    menu_page:{
      background: "linear-gradient(rgb(183, 237, 240),#dfad6a)",
      display: "flex",
      justifyContent: "center",
      height: "100vh",
    },
    border_page:{
      backgroundColor : "#0b1215",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }
  };

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div style={page_style.menu_page} ><MainPage /></div>} />
        <Route path="/border" element={<div style={page_style.border_page}><BorderGame /></div>} />
      </Routes>
    </BrowserRouter>
   
  );
}
export default App;
