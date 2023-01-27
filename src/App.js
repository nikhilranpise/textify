import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert'; 

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      mes: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000
    );
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#373F4D";
      showAlert("Dark Mode Has Been Enabled", "success")
      document.title = "Navigato - Dark Mode";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Has Been Disabled", "success")
      document.title = "Navigato - Home";
    }
  }

  return (
    <>
        <Navbar title="Navigato" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
          <TextForm heading="Enter Text to Analyse" mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
