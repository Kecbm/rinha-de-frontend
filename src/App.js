import React, { useState } from 'react';
import ReactJson from 'react-json-view'

function App() {
  const [inputJSON, setInputJSON] = useState(null);
  const [inputFileName, setInputFileName] = useState('');
  const [submitJSON, setSubimitJSON] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const jsonContent = JSON.parse(event.target.result); // Parse a JSON string to an object
          setInputJSON(jsonContent);
          setInputFileName(file.name);
        } catch (error) {
          console.error('Erro ao fazer parse do JSON:', error);
        }
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

    document.getElementById("fileInput").value = ''; 
  };

  return (
    <div>
      <h1>Rinha de Frontend</h1>

      <section>
        <input
          id="fileInput"
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
            <ReactJson
              src={inputJSON}
              name={inputFileName}
              indentWidth="2"
              collapsed="true"
            />
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
