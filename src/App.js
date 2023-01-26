import './App.css';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [text, SetText] = useState('');
  console.log("text",text)
  return (
    <div className="App">
      <Navbar SetText={SetText}/>
      <MovieList text={text}/>
      <Footer/>
     
    </div>
  );
}

export default App;
