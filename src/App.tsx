import style from './App.module.css';
import React from 'react';
import { Header, Footer } from './components'
function App() {
  return (
    <div className={style.App}>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
