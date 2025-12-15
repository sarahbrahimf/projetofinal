import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Estoque() {
  const navigate = useNavigate();

  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({
    id_produto: null,
    nome: "",
    descricao: "",
    preco: "",
    quantidade: "",
    imagem_url: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function salvarProduto(e) {
    e.preventDefault();

    if (!form.nome || !form.preco || !form.quantidade) {
      alert("Preencha os campos obrigatórios!");
      return;
    }

    if (form.id_produto) {
      // EDITAR
      setProdutos(produtos.map(p =>
        p.id_produto === form.id_produto ? form : p
      ));
    } else {
      // ADICIONAR
      setProdutos([...produtos, {
        ...form,
        id_produto: Date.now()
      }]);
    }

    limparForm();
  }

  function editarProduto(produto) {
    setForm(produto);
  }

  function removerProduto(id) {
    setProdutos(produtos.filter(p => p.id_produto !== id));
  }

  function limparForm() {
    setForm({
      id_produto: null,
      nome: "",
      descricao: "",
      preco: "",
      quantidade: "",
      imagem_url: ""
    });
  }

  return (
    <div style={styles.container}>

      {/* TOPO */}
      <div style={styles.top}>
        <h1>📦 Controle de Estoque</h1>
        <p>Gerencie os produtos da cantina</p>
      </div>

      {/* FORM */}
      <form style={styles.form} onSubmit={salvarProduto}>
        <input name="nome" placeholder="Nome do produto" value={form.nome} onChange={handleChange} />
        <input name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} />
        <input name="preco" type="number" placeholder="Preço" value={form.preco} onChange={handleChange} />
        <input name="quantidade" type="number" placeholder="Quantidade" value={form.quantidade} onChange={handleChange} />
        <input name="imagem_url" placeholder="URL da imagem" value={form.imagem_url} onChange={handleChange} />

        <button type="submit" style={styles.btnPrimary}>
          {form.id_produto ? "Salvar Alterações" : "Adicionar Produto"}
        </button>
      </form>

      {/* LISTA */}
      <div style={styles.lista}>
        {produtos.map(produto => (
          <div key={produto.id_produto} style={styles.card}>
            {produto.imagem_url && (
              <img
                src={produto.imagem_url}
                alt={produto.nome}
                style={styles.img}
              />
            )}

            <h3>{produto.nome}</h3>
            <p style={styles.desc}>{produto.descricao}</p>
            <p><strong>Preço:</strong> R$ {produto.preco}</p>
            <p><strong>Qtd:</strong> {produto.quantidade}</p>

            <div style={styles.actions}>
              <button onClick={() => editarProduto(produto)} style={styles.btnEdit}>Editar</button>
              <button onClick={() => removerProduto(produto.id_produto)} style={styles.btnDelete}>Remover</button>
            </div>
          </div>
        ))}
      </div>

      {/* VOLTAR */}
      <button style={styles.voltar} onClick={() => navigate("/admin")}>
        ← Voltar para Home Admin
      </button>

    </div>
  );
}

/* 🎨 ESTILOS */
const styles = {
  container: {
    minHeight: "100vh",
    padding: "30px",
    background: "#f2f2f2"
  },

  top: {
    background: "#0a58ca",
    color: "#fff",
    padding: "30px",
    borderRadius: "16px",
    marginBottom: "30px"
  },

  form: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    marginBottom: "30px"
  },

  btnPrimary: {
    gridColumn: "1 / -1",
    background: "#f2b705",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  lista: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px"
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },

  img: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px"
  },

  desc: {
    fontSize: "14px",
    color: "#555"
  },

  actions: {
    display: "flex",
    gap: "10px",
    marginTop: "10px"
  },

  btnEdit: {
    background: "#0a58ca",
    color: "#fff",
    border: "none",
    padding: "8px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  btnDelete: {
    background: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "8px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  voltar: {
    marginTop: "40px",
    background: "transparent",
    border: "none",
    color: "#0a58ca",
    fontSize: "16px",
    cursor: "pointer"
  }
};

