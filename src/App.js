import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';

function App() {

  const titlePhrases = ["Secret Word", "Guess the word:", "Game over!"]
  const pages = ["begin", "play", "end"]
  const [title, setTitle] = useState(titlePhrases[0])
  const [screen, setScreen] = useState(pages[0])

  return (
    <div className="App">
      <Header title={title}/>
      <Body />
    </div>
  );
}

export default App;