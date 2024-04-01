

const Start = ({ setTries, setStart }) => {
  return (
    <div id="startcontainer">
      <div id="start">
        <h3>choose difficulty:</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          setStart(false)
        }}
        >
          <button className="green"
            onClick={() => {
              setTries(6);
            }}
          >Easy</button> <br />
          <button className="yellow"
            onClick={() => {
              setTries(5);
            }}
          >Normal</button> <br />
          <button className="orange"
            onClick={() => {
              setTries(4);
            }}
          > Hard</button> <br />
          <button className="red"
            onClick={() => {
              setTries(3);
            }}
          >Unfair</button>
        </form>
      </div>
    </div>
  )
}

export default Start