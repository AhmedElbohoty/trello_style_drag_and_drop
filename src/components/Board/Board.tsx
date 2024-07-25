import { Droppable } from "react-beautiful-dnd";

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
      <Droppable droppableId={boardId}>
        {(provided) => {
          return (
            <section
              className="board"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Header />
              <Stats />
              {/* {provided.placeholder} */}
              <Cards />
            </section>
          );
        }}
      </Droppable>
    </BoardContext.Provider>
  );
}

export default Board;
