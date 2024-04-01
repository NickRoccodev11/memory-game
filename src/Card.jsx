const Card = ({ card, flipped, setFlipped, }) => {
  return (
    <div className={`flip-card ${card.solved || flipped.includes(card)
      ? "flipped" : ""} ${card.color}`}>
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          onClick={() => {
            setFlipped([...flipped, card])
          }}
        >
        </div>
        <div className="flip-card-back" >
          <span>{card.symbol}</span>
        </div>
      </div>
    </div>
  )
}

export default Card