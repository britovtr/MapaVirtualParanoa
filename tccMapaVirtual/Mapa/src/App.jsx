import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Funcionarios from "./pages/Funcionario";
import Mapa from "./pages/Mapa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/mapa" element={<Mapa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
