import Header from "components/Board/Header/Header";
import Stats from "components/Board/Stats/Stats";
import Cards from "components/Board/Cards/Cards";

import { BoardId } from "types/board";
import { BoardContext } from "contexts/BoardContext";

// CSS prefix: .board-
import "./style.css";

type BoardProps = { boardId: BoardId };

function Board({ boardId }: BoardProps) {
  return (
    <BoardContext.Provider value={{ boardId }}>
      <section className="board">
        <Header />
        <Stats />
        <Cards />
      </section>
    </BoardContext.Provider>
  );
}

export default Board;
