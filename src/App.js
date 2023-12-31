import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';

function App() {

  const pages = ["begin", "play", "end"]
  const [title, setTitle] = useState("Secret Word")
  const [description, setDescription] = useState("Click in below button to play the game")
  const [buttonText, setButtonText] = useState("START GAME")
  const [screen, setScreen] = useState(pages[0])

  const changeScreen = () => {
    switch (screen) {
      case "begin":
        setTitle("Guess the word:")
        setDescription("Hint about the word:")
        setButtonText("PLAY!")
        setScreen("play")
        break
      case "play":
        setTitle("Game over!")
        setDescription("Your score:")
        setButtonText("RESTART")
        setScreen("end")
        break
      case "end":
        setTitle("Secret Word")
        setDescription("Click in below button to play the game")
        setButtonText("START GAME")
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
        description={description}
        buttonText={buttonText}
        changeScreen={changeScreen}
      />
    </div>
  );
}

export default App;