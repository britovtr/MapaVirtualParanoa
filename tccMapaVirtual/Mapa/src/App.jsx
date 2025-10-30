import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Funcionarios from "./pages/Funcionario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
