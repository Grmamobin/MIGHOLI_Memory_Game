import React from 'react';
import { Route, Routes , BrowserRouter  } from "react-router-dom";
import './App.css';
import RestartOrNot from './components/restartORexit';
import BoardGame from "./pages/Board"
import MainPage from './pages/mainPage';


function App() {

  const page_style = {

    main_page:{
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
          <Route path="/" element={<div style={page_style.main_page} ><MainPage /></div>} />
          <Route path="/border" element={<BoardGame />} />
          <Route path="/restart" element={<RestartOrNot statues={''} score={''} images={''} alt_image={''}/>} />
      </Routes>
    </BrowserRouter>
   
  );
}
export default App;
