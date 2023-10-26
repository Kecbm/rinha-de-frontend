import React, { useState } from 'react';
import ReactJson from 'react-json-view'
import translations from './locales/translations';
import './styles/App.css';

function App() {
  const [inputJSON, setInputJSON] = useState(null);
  const [inputFileName, setInputFileName] = useState('');
  const [submitJSON, setSubimitJSON] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('pt');
  const [invalidJson, setInvalidJson] = useState(null);
  const [buttonId, setButtonId] = useState('btn-clear');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      const startTime = performance.now();

      reader.onload = (event) => {
        try {
          const jsonContent = JSON.parse(event.target.result);
          setInputJSON(jsonContent);
          setInputFileName(file.name);

          const endTime = performance.now();
          const timeTaken = endTime - startTime;

          console.log(`Tempo de processamento do arquivo: ${timeTaken} ms`);
        } catch (error) {
          setInvalidJson(translations[selectedLanguage].invalidContentJson);
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
    setInvalidJson(null);
    setButtonId('btn-active');

    setTimeout(() => {
      setButtonId('btn-clear');
    }, 2000);

    document.getElementById("input-file").value = ''; 
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const languageOptions = [
    { value: 'en', label: '🇺🇸 English' },
    { value: 'pt', label: '🇧🇷 Português' },
    { value: 'la', label: '🇪🇸 Espanhol' },
    // Adicione mais opções conforme necessário.
  ];

  return (
    <div id="home-page">
      {/* https://www.youtube.com/watch?v=uFIl4BvYne0 */}
      <select
        value={selectedLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
        aria-label={translations[selectedLanguage].selectLanguage}
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value} className="language-option">
            {option.label}
          </option>
        ))}
      </select>

      <h1 id="home-title">{translations[selectedLanguage].titlePage}</h1>

      <p id="description">{translations[selectedLanguage].description}</p>

      <section id="input-content">
        <p id="input-title">{translations[selectedLanguage].inputLabel}</p>

        <label htmlFor="input-file" id="input-label" aria-describedby={translations[selectedLanguage].inputAriaDescribedBy}>
          <img src="https://img.icons8.com/ios-filled/50/opened-folder.png" alt="opened-folder" className="input-icon" />
          {translations[selectedLanguage].inputPlaceholder}
        </label>

        <input
          id="input-file"
          type="file"
          onChange={handleFileChange}
          accept=".json"
          onClick={handleJSONSubmit}
        />
      </section>
        
      <button
        onClick={handleClearJSON}
        aria-label={translations[selectedLanguage].clearButtonAriaLabel}
        id={buttonId}
        disabled={!inputJSON}
      >
        {/* <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/818181/delete--v1.png" alt="delete--v1"/> */}
        <img src="https://img.icons8.com/ios-filled/50/delete--v1.png" alt="delete--v1" className="input-icon"/>
        {translations[selectedLanguage].clearButton}
      </button>
                               
      {
        submitJSON && inputJSON ? (
          <section id="json-content">
            <ReactJson
              src={inputJSON}
              name={inputFileName}
              indentWidth="2"
              collapsed="true"
              aria-label={`${translations[selectedLanguage].reactJsonAriaLabel} ${inputFileName}`}
              aria-labelledby={translations[selectedLanguage].reactJsonAriaLabellEdby}
              enableClipboard={false}
              displayObjectSize={false}
              displayDataTypes={false}
              displayArrayKey={false}
            />
          </section>
        ) : (
          <section id="json-content">
            {
              invalidJson ? <p id="invalid-json">{invalidJson}</p> : <p>{translations[selectedLanguage].contentJson}</p>
            }
          </section>
        )
      }

      <footer>
        <img className="input-icon" src="https://img.icons8.com/arcade/64/sparkling.png" alt="sparkling"/>
        <p>
          {translations[selectedLanguage].frontend}
        </p>
        <img className="input-icon" src="https://img.icons8.com/arcade/64/sparkling.png" alt="sparkling"/>
      </footer>
    </div>
  );
}

export default App;
