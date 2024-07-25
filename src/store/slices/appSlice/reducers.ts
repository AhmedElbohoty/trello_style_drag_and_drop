import { PayloadAction } from "@reduxjs/toolkit";

import { BoardId } from "types/board";
import { UserId } from "types/user";
import { InitialState } from "store/slices/appSlice/initialState";

const updateUsersIds = (
  state: InitialState,
  action: PayloadAction<{ boardId: BoardId; usersIds: UserId[] }>
) => {
  const { boardId, usersIds } = action.payload;

  state.boards[boardId].userIds = usersIds;
};

const reducers = { updateUsersIds };

export default reducers;
