const Card = ({ card, flipped, setFlipped, }) => {
  return (
    <div className={`flip-card 
    ${card.solved || flipped.includes(card) ? "flipped" : ""} `}>
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          onClick={() => {
            if (flipped.length < 2) {
              setFlipped([...flipped, card])
            }
          }}
        >
        </div>
        <div className={`flip-card-back ${card.color} `} >
          <span>{card.symbol}</span>
        </div>
      </div>
    </div>
  )
}

export default Card