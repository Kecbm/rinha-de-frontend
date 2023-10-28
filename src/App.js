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
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [buttonIconColor, setButtonIconColor] = useState('818181');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true);
      const reader = new FileReader();
      const startTime = performance.now();

      reader.onload = (event) => {
        try {
          const jsonContent = JSON.parse(event.target.result);
          setInputJSON(jsonContent);
          setIsLoading(false);
          setInputFileName(file.name);
          setIsButtonDisabled(false);
          setButtonIconColor('000000');

          const endTime = performance.now();
          const timeTaken = endTime - startTime;

          console.log(`Tempo de processamento do arquivo: ${timeTaken} ms`);
        } catch (error) {
          setIsLoading(false);
          setInvalidJson(translations[selectedLanguage].invalidContentJson);
          setIsButtonDisabled(false);
          setButtonIconColor('000000');
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
      setIsButtonDisabled(true);
      setButtonIconColor('818181');
    }, 2000);

    document.getElementById("input-file").value = ''; 
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const languageOptions = [
    { value: 'ar', label: '🇸🇦 Árabe' },
    // { value: 'bn', label: '🇧🇩 Bengali' },
    { value: 'zh', label: '🇨🇳 Chinês' },
    { value: 'en', label: '🇺🇸 English' },
    { value: 'la', label: '🇪🇸 Espanhol' },
    { value: 'hi', label: '🇮🇳 Hindi' },
    { value: 'ja', label: '🇯🇵 Japonês' },
    { value: 'pa', label: '🇵🇰 Punjabi' },
    { value: 'pt', label: '🇧🇷 Português' },
    { value: 'ru', label: '🇷🇺 Russo' },
  ];

  return (
    <div
      id="home-page"
      aria-label={translations[selectedLanguage].pageLabel}
    >
      {/* https://www.youtube.com/watch?v=uFIl4BvYne0 */}
      <select
        value={selectedLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
        aria-label={translations[selectedLanguage].selectLanguage}
        tabindex="1"
      >
        {languageOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
            aria-label={`${translations[selectedLanguage].selectOptionLabel} ${option.label}`}
          >
            {option.label}
          </option>
        ))}
      </select>

      <h1
        id="home-title"
        aria-labelledby={translations[selectedLanguage].titleLabel}
        tabindex="2"
      >
        {translations[selectedLanguage].titlePage}
      </h1>

      <p
        id="description"
        aria-labelledby={translations[selectedLanguage].descriptionPage}
        tabindex="3"
      >
        {translations[selectedLanguage].description}
      </p>

      <section
        id="input-content"
        aria-labelledby={translations[selectedLanguage].sectionSendJson}
      >
        <p 
          id="input-title"
          aria-labelledby={translations[selectedLanguage].sendJsonTitle}
          tabindex="4"
        >
          {translations[selectedLanguage].sendJsonText}
        </p>

        <label
          htmlFor="input-file"
          id="input-label"
          aria-label={translations[selectedLanguage].inputLabel}
          aria-describedby={translations[selectedLanguage].inputAriaDescribedBy}
          tabindex="5"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/opened-folder.png"
            alt={translations[selectedLanguage].iconFolder}
            className="input-icon"
          />
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
        disabled={isButtonDisabled}
        tabindex="6"
      >
        <img
          src={`https://img.icons8.com/ios-filled/50/${buttonIconColor}/delete--v1.png`}
          alt={translations[selectedLanguage].iconClear}
          className="input-icon"
        />
        {translations[selectedLanguage].clearButton}
      </button>
                               
      {
        submitJSON && inputJSON ? (
          <section
            id="json-content"
            aria-labelledby={translations[selectedLanguage].sectionShowJson}
          >
            <ReactJson
              src={inputJSON}
              name={inputFileName}
              indentWidth="2"
              collapsed="true"
              aria-label={`${translations[selectedLanguage].reactJsonAriaLabel} ${inputFileName}`}
              aria-describedby={translations[selectedLanguage].reactJsonAriaDescribedBy}
              enableClipboard={false}
              displayObjectSize={false}
              displayDataTypes={false}
              displayArrayKey={false}
              tabindex="7"
            />
          </section>
        ) : (
          <section
            id="json-content"
            aria-labelledby={translations[selectedLanguage].sectionShowJson}
          >
            {
              invalidJson
              ? <p id="invalid-json" aria-labelledby={translations[selectedLanguage].invalidContentJsonAria} tabindex="8">
                  {invalidJson}
                </p>
              : <p aria-labelledby={translations[selectedLanguage].sectionShowJson} tabindex="9">
                  {isLoading ? (<div class="lds-spinner" aria-labelledby={translations[selectedLanguage].sectionSendJson} tabindex="10"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>) : (translations[selectedLanguage].contentJson)}
                </p>
            }
          </section>
        )
      }

      <footer
        aria-labelledby={translations[selectedLanguage].footer}
        tabindex="11"
      >
        <p
          aria-labelledby={translations[selectedLanguage].devAria}
          tabindex="12"
        >
          {translations[selectedLanguage].devText} <a href="https://github.com/Kecbm" target="_blank"  rel="noreferrer">Klecianny Melo</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
