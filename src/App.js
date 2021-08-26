import React, { useState } from 'react';



function App() {

  // Declare uma nova variável de state, a qual chamaremos de "count"

  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("Leandro");
  const [numeros, setarNumeros] = useState([1,2,3,4,5,6]);
  const [obj, setObj] = useState({ nome: 'Leandro', idade: 32 });

  return (
    <div>{
      numeros.map(function(val) {
        return (
          <p>You clicked {val} times</p>
        )
      })
    }
      
        <button onClick={() => setarNumeros("Leandro")}>
          Click me
        </button>
    </div>
  );
}

export default App