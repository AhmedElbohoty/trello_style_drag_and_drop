import Header from "components/Board/Header/Header";
import Stats from "components/Board/Stats/Stats";

// CSS prefix: .board-
import "./style.css";

function Board() {
  return (
    <section className="board">
      <Header />
      <Stats />
    </section>
  );
}

export default Board;
