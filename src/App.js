import React, { useState } from 'react';

function App() {
  const [inputJSON, setInputJSON] = useState(null);
  const [submitJSON, setSubimitJSON] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const jsonContent = event.target.result;
        setInputJSON(jsonContent);
      };
      reader.readAsText(file);
    }
  };

  const handleJSONSubmit = () => {
    setSubimitJSON(true);
  };

  const handleClearJSON = () => {
    setSubimitJSON(false);
    setInputJSON(null);
  };

  return (
    <div>
      <h1>Rinha de Frontend</h1>

      <section>
        <input
          type="file"
          onChange={handleFileChange}
          placeholder="Insira o JSON aqui"
        />
        <button onClick={handleJSONSubmit}>Enviar</button>
        <button onClick={handleClearJSON}>Limpar</button>
      </section>

      {
        submitJSON && inputJSON ? (
          <section>
            <pre>{JSON.stringify(JSON.parse(inputJSON), null, 2)}</pre>
          </section>
        ) : null
      }

      <footer>
        <p>✨ Frontend is my passion ✨</p>
      </footer>
    </div>
  );
}

export default App;
