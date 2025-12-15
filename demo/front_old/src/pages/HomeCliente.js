import { useEffect, useState } from "react";

export default function HomeCliente() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const dados = localStorage.getItem("produtos");
    if (dados) {
      setProdutos(JSON.parse(dados));
    }
  }, []);

  return (
    <div>
      <h2>Produtos disponíveis</h2>

      {produtos.length === 0 && <p>Nenhum produto disponível.</p>}

      {produtos.map((p) => (
        <div key={p.id_produto}>
          <h3>{p.nome}</h3>
          <p>{p.descricao}</p>
          <p>R$ {p.preco}</p>
          <p>Estoque: {p.quantidade}</p>

          {p.imagem_url && (
            <img src={p.imagem_url} alt={p.nome} width="120" />
          )}

          <button>Adicionar ao carrinho</button>
        </div>
      ))}
    </div>
  );
}
