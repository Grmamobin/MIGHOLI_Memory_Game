import Image from "next/image";
import BorderGame from "./border_game";
import { Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <Routes>
      <Route path="/border_game" element={<BorderGame />} />
    </Routes>
  );
}
