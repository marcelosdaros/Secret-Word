import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';

function App() {

  const pages = ["begin", "play", "end"]
  const [title, setTitle] = useState("Secret Word")
  const [screen, setScreen] = useState(pages[0])

  const handleClick = () => {
    switch (screen) {
      case "begin":
        setTitle("Guess the word:")
        setScreen("play")
        break
      case "play":
        setTitle("Game over!")
        setScreen("end")
        break
      case "end":
        setTitle("Secret Word")
        setScreen("begin")
        break
      default:
        break
    }
  }

  return (
    <div className="App">
      <Header
        title={title}
      />
      <Body
        screen={screen}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;