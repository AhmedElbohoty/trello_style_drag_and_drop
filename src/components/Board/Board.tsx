import Header from "components/Board/Header/Header";
import Stats from "components/Board/Stats/Stats";
import Cards from "components/Board/Cards/Cards";

// CSS prefix: .board-
import "./style.css";

function Board() {
  return (
    <section className="board">
      <Header />
      <Stats />
      <Cards />
    </section>
  );
}

export default Board;
