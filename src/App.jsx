import { useState } from "react";
import "./App.css";
import TextTitle from "./components/TextTitle";
import PaperCookies from "./components/PaperCookies";
import phrases from "./data/phrases.json";


function App() {
  const arrBacgroundImg = [
    "/fortuna-1/fondo1.jpg",
    "/fortuna-1/fondo2.jpg",
    "/fortuna-1/fondo3.jpg",
    "/fortuna-1/fondo4.jpg",
  ];

  const [indexPhrase, setIndexPhrase] = useState(0);

  const [indexBackground, setIndexBackgound] = useState(0);

  const changeBackground =() =>{
     setIndexBackgound(Math.floor(Math.random()*4))
  }

  const changePhrase = () => {
    const totalPhrases = phrases.length;
    setIndexPhrase(Math.floor(Math.random() * totalPhrases));
    changeBackground()
  };

  

  return (
    <div
      className="App"
      style={{
        backgroundImage: "url(" + arrBacgroundImg[indexBackground] + ")",
      }}
    >
      <TextTitle />
      <PaperCookies
        phrase={phrases[indexPhrase].phrase}
        author={phrases[indexPhrase].author}
      />
     

      <button onClick={changePhrase} className="btnSeeOther">ver otro</button>
    </div>
  );
}

export default App;
