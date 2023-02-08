import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  // const [page, setPage] = useState('About');
  const [BtnText, setBtnText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null)


  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const redMode = () => {
    setMode('danger');
    document.body.style.backgroundColor = '#ff5767';
    let c = document.querySelectorAll('.colorPicker');
    c.forEach(element => {
      element.style.border = '2px solid white';
    });
    showAlert('Red Mode Enabled.', 'danger');
    document.title = 'TextUtils-- RedMode'

  }
  const greenMode = () => {
    setMode('success');
    document.body.style.backgroundColor = '#30d488';
    let c = document.querySelectorAll('.colorPicker');
    c.forEach(element => {
      element.style.border = '2px solid white';
    });
    showAlert('Green Mode Enabled.', 'success');
    document.title = 'TextUtils-- GreenMode'
  }
  const blueMode = () => {
    setMode('primary');
    document.body.style.backgroundColor = '#6097e8';
    let c = document.querySelectorAll('.colorPicker');
    c.forEach(element => {
      element.style.border = '2px solid white';
    });
    showAlert('Blue Mode Enabled.', 'primary');
    document.title = 'TextUtils-- BlueMode'


  }
  const darkMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBtnText('Enable Light Mode');
      document.body.style.backgroundColor = '#3c3d3e';
      // setPage('About 1')
      let c = document.querySelectorAll('.colorPicker');
      c.forEach(element => {
        element.style.border = '2px solid white';
      });
      showAlert('Dark Mode Enabled.', 'success');
      document.title = 'TextUtils-- DarkMode'
    } else {
      setMode('light');
      setBtnText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      let c = document.querySelectorAll('.colorPicker');
      c.forEach(element => {
        element.style.border = '2px solid black';
      });
      showAlert('Light Mode Enabled.', 'success');
      document.title = 'TextUtils-- LightMode'

    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} BtnText={BtnText} page={"About"} darkMode={darkMode} redMode={redMode} greenMode={greenMode} blueMode={blueMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}>

          </Route>

          <Route exact path="/" element={<TextBox mode={mode} BtnText={BtnText} showAlert={showAlert} />}>

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
