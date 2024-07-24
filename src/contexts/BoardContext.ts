import { createContext, useContext } from "react";

import { BoardId } from "types/board";

type Context = { boardId: BoardId };

export const BoardContext = createContext<Context | undefined>(undefined);

export const useBoardContext = () => {
  const context = useContext(BoardContext);

  if (context === undefined) {
    throw new Error(
      "useBoardContext must be used within a BoardContext Provider"
    );
  }

  return context;
};
