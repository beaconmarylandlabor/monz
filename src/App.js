import './App.css';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Header from './componenet/Header';
import Form from './componenet/Form';



function App() {
 
  return (
    <div>
      <Header/>
      <Form/>
    </div>
  );
}

export default App;
