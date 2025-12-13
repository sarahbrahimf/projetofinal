import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroAlunos() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [matricula, setMatricula] = useState("");

  function handleCadastro(e) {
    e.preventDefault();

    console.log("Aluno cadastrado:", {
      nome,
      email,
      senha,
      telefone,
      matricula,
    });

    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* Lado azul */}
        <div style={styles.left}>
          <h2 style={styles.logo}>Cantina SESI</h2>
          <p style={styles.welcome}>Bem-vindo</p>
          <p style={styles.subtitle}>
            Já tem uma conta? Faça Login!
          </p>

          <button style={styles.secondaryBtn} onClick={() => navigate("/login")}>
            Login
          </button>
        </div>

        {/* Lado branco */}
        <div style={styles.right}>
          <h2 style={styles.title}>Crie sua conta agora mesmo.</h2>
          <p style={styles.desc}>Preencha com suas informações</p>

          <form onSubmit={handleCadastro} style={styles.form}>
            <input
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              style={styles.input}
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />

            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={styles.input}
              required
            />

            <input
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              style={styles.input}
              required
            />

            <input
              type="text"
              placeholder="Matrícula"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              style={styles.input}
              required
            />

            <button type="submit" style={styles.primaryBtn}>
              Cadastrar
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

/* 🎨 ESTILOS */
const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f2f2f2",
  },
  card: {
    width: "900px",
    height: "520px",
    display: "flex",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    background: "#fff",
  },
  left: {
    width: "35%",
    background: "#0d5bd7",
    color: "#fff",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  logo: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  welcome: {
    fontSize: "22px",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: "14px",
    margin: "15px 0 30px",
    opacity: 0.9,
  },
  secondaryBtn: {
    background: "transparent",
    border: "1px solid #fff",
    color: "#fff",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  right: {
    width: "65%",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "22px",
    marginBottom: "5px",
    color: "#1a1a1a",
  },
  desc: {
    fontSize: "14px",
    color: "#f2b705",
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    background: "#e6e6e6",
    fontSize: "14px",
  },
  primaryBtn: {
    marginTop: "10px",
    background: "#f2b705",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
