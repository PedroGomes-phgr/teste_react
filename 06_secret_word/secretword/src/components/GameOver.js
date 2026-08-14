import "./GameOver.css"

const GameOver = ({ retry }) => {
  return (
    <div className="game-over">
      <h2>Game Over</h2>
      <button onClick={retry}>Resetar Jogo</button>
    </div>
  )
}

export default GameOver