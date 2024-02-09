import React from 'react';
import './App.css';
import { Route, Routes , BrowserRouter  } from "react-router-dom";
import BorderGame from "./pages/Boarder"
import MainPage from './pages/menu';
import RestartOrNot from './components/restartORexit';


function App() {

  const page_style = {
    menu_page:{
      backgroundImage: 'url("/images/BEACH.png")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      width:"100vw"
    }
  };

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div style={page_style.menu_page} ><MainPage /></div>} />
        <Route path="/border" element={<BorderGame />} />
        <Route path="/restart" element={<RestartOrNot statues={'GAME OVER'} images={'/images/migholi_background2.svg'} alt_image={'um'}/>} /> 
      </Routes>
    </BrowserRouter>
   
  );
      }
export default App;
