import React, { useState, useEffect } from 'react';



function App() {

  // Declare uma nova variável de state, a qual chamaremos de "count"

  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("Leandro");
  
  function callAlert() {

  }

  useEffect(() => {
    callAlert();
  }, [count])

    return (
      <div>
        {
          (nome == "Leandro")?
            <div>
              <p>{nome}</p>
            </div>:
            <div>
              <p>Opss eu preciso do nome Leandro.</p>
            </div>
        }
      </div>
    );
}

export default App