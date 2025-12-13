import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import AuthChoice from "./pages/AuthChoice";
import Login from "./pages/Login";
import CadastroAluno from "./pages/CadastroAluno";
import HomeAdmin from "./pages/HomeAdmin";
import HomeCliente from "./pages/HomeCliente";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthChoice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<CadastroAluno />} />

          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/cliente" element={<HomeCliente />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
