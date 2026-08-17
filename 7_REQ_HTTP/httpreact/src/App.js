import './App.css';

import { useState, useEffect } from 'react';

//4 - custim hook
import { useFetch } from './hooks/useFetch';

  

const url = "http://localhost:3000/products";
function App() {
  const [products,setProducts] = useState([])

  //4 - custom
  const {data: items, httpConfig } = useFetch(url);

 

  const [name,setName] =  useState("")
  const [price,setPrice] = useState("")

  //1 - resgatando dados


  // 2 - add produtos
  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Entrou no submit");

  const product = {
    name,
    price,
  };

  //const res = await fetch(url, {
   // method: "POST",
    //headers: {
    //  "Content-Type": "application/json",
   // },
   // body: JSON.stringify(product),
 // });


    //3 - carregamento dinamico
   // const addedProduct = await res.json()

  //  setProducts((prevProducts) => [...prevProducts, addedProduct] );

    //5 - reftpost
    httpConfig(product,"POST");
  setName("")
  setPrice("")
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {items && items.map((product)=> (
          <li key={product.id}>
            {product.name}- R$: {product.price}
          </li>
        ))}
      </ul>
      <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input 
                type="text" 
                value={name} 
                name="name" 
                onChange={(e) => setName(e.target.value) } 
               />
            </label>
            <label>
              Preço:
              <input
               type="number"
               value={price} 
               name="price" 
               onChange={(e) => setPrice(e.target.value) }  
               />
            </label>
            <input type="submit" value="Criar"  />
          </form>
      </div>
    </div>
  );
}

export default App;
