import React from 'react';
import './App.css';
import { Route, Routes , BrowserRouter  } from "react-router-dom";
import BorderGame from "./pages/Boarder"
import MainPage from './pages/menu';


function App() {

  const page_style = {
    menu_page:{
      backgroundImage: 'url("/images/BEACH.png")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      height: "100vh",
    }
  };

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div style={page_style.menu_page} ><MainPage /></div>} />
        <Route path="/border" element={<BorderGame />} />
      </Routes>
    </BrowserRouter>
   
  );
}
export default App;
