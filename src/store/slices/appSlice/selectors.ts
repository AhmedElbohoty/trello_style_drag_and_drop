import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { BoardId } from "types/board";
import { UserId } from "types/user";

export const selectUsers = ({ app }: RootState) => app.users;

export const selectUserById = ({ app }: RootState, id: UserId) => app.users[id];

export const selectBoards = ({ app }: RootState) => app.boards;

export const selectBoardsIds = ({ app }: RootState) => app.boardsIds;

export const selectBoardById = ({ app }: RootState, id: BoardId) =>
  app.boards[id];

export const selectBoardName = createSelector(
  (s: RootState, id: BoardId) => selectBoardById(s, id),
  (board) => board.name
);

export const selectBoardTotal = createSelector(
  (s: RootState, id: BoardId) => selectBoardById(s, id),
  (board) => board.total
);

export const selectBoardRegected = createSelector(
  (s: RootState, id: BoardId) => selectBoardById(s, id),
  (board) => board.rejected
);

export const selectBoardUserIds = createSelector(
  (s: RootState, id: BoardId) => selectBoardById(s, id),
  (board) => board.userIds
);
