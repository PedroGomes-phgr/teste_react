import { useState, useRef } from "react"
import "./Game.css"
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const Game = ({ 
  verifyLetter,
   pickedWord,
   pickedCategory,
   letters,
   guessedLetters,
   wrongLetters,
   guesses,
   score,
}) => {
  const[letter, setLetter] = useState("");
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
  
    verifyLetter(letter);

    setLetter("");

    letterInputRef.current.focus();
  };

  return (
    <div className="game">
      <p className="points" >
        <span>Pontuação: {score}</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip" >
        Dica sobre a palava: <span>{pickedCategory}</span>
      </h3>
      <p className="guesses">
        {Array.from({ length: guesses }).map((_, index) => (
          <FaHeart
            key={index}
            color="#ef4444"
            size={22}
          />
        ))}
      </p>
      <div className="wordContainer">
         {letters.map((letter, i) => 
          guessedLetters.includes(letter) ? (
            <motion.span
              key={i}
              className="letter"
              initial={{
                rotateX: 180,
                scale: 0.5,
                opacity: 0,
              }}
              animate={{
                rotateX: 0,
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
            >
              {letter}
            </motion.span>
          ) : (
            <span key={i} className="blankSquare"></span>  
          )
         )}         
    </div>
    <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
           type="text"
           name="letter" 
           maxLength="1" 
           required  
           onChange={(e) => setLetter(e.target.value)}
           value={letter}
           ref={letterInputRef}
           />
          <button>Jogar!</button>
        </form>    
    </div>
    <div className="wrongLettersContainer">
      <p>Letras já utilizadas:</p>
      {wrongLetters.map((letter, i) => (
        <span key={i}>{letter}, </span>
      ))}
    </div>
  </div>  
  )
}

export default Game