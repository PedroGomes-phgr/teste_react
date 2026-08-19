import "./App.css";
import { useState } from "react";

import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !price) {
      alert("Preencha todos os campos!");
      return;
    }

    const product = {
      name,
      price,
    };

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Preço:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          {/* 7 - state de loading no post */}
          {loading && <input type="submit" disabled value="Aguarda" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>

      <div className="products-container">
        {items &&
          items.map((product) => (
            <div className="product-card" key={product.id}>
              <h2>{product.name}</h2>
              <p>R$ {product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;