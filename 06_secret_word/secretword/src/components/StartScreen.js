import { motion } from "framer-motion";
import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <motion.div
      className="start"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Secret Word</h1>
      <p>Clique no botão para começar a jogar!</p>
      <button onClick={startGame}>Começar o jogo</button>
    </motion.div>
  );
};

export default StartScreen;