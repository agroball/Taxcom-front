import "./Main.css";
import Card from "../Card/Card";

function Main(props) {
  return(
    <div className="main">
        <h1 className="main__header">Секция 0</h1>
      <sections>
        {props.cards.map((card) => (
          <Card
            name={card.name}
          />
        ))}
      </sections>
      </div>
  );
}

export default Main;
