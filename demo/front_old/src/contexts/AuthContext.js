import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(email, senha) {
    if (email === "admin@cantina.com" && senha === "123") {
      setUser({ role: "ADMIN", email });
      return "ADMIN";
    }

    if (email.endsWith("@aluno.com") && senha === "123") {
      setUser({ role: "CLIENTE", email });
      return "CLIENTE";
    }

    return null;
  }

  function cadastrarAluno(dados) {
    setUser({
      role: "CLIENTE",
      ...dados
    });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, cadastrarAluno, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
