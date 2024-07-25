import { DragDropContext, DropResult } from "react-beautiful-dnd";

import Board from "components/Board/Board";

import { useAppSelector } from "store/hooks";
import { selectBoards, selectBoardsIds } from "store/slices/appSlice/selectors";

import store from "store/store";
import { updateUsersIds } from "store/slices/appSlice/slice";

// CSS prefix: .homepage-
import "./style.css";

function HomePage() {
  const boardsIds = useAppSelector(selectBoardsIds);

  const elems = boardsIds.map((id) => <Board key={id} boardId={id} />);

  function onDragEnd(result: DropResult) {
    // Note:
    // destination.droppableId is board id
    // source.droppableId is board id
    // draggableId is user id

    // Get state from store
    const dispatch = store.dispatch;
    const storeState = store.getState();

    const { source, destination, draggableId } = result;

    if (!destination) return;

    // Do nothing if user card is dropped in the same place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // User card is dropped in another place within same board
    if (destination.droppableId === source.droppableId) {
      const boards = selectBoards(storeState);
      const board = boards[source.droppableId];
      const newUsersIds = board.userIds
        .toSpliced(source.index, 1)
        .toSpliced(destination.index, 0, draggableId);

      dispatch(
        updateUsersIds({ boardId: source.droppableId, usersIds: newUsersIds })
      );

      return;
    }

    const boards = selectBoards(storeState);

    // Update source
    const sourceBoard = boards[source.droppableId];
    const newSourceUsersIds = sourceBoard.userIds.toSpliced(source.index, 1);

    dispatch(
      updateUsersIds({
        boardId: source.droppableId,
        usersIds: newSourceUsersIds,
      })
    );

    // Update destination
    const destBoard = boards[destination.droppableId];
    const newDestUsersIds = destBoard.userIds.toSpliced(
      destination.index,
      0,
      draggableId
    );

    dispatch(
      updateUsersIds({
        boardId: destination.droppableId,
        usersIds: newDestUsersIds,
      })
    );
  }

  return (
    <div className="homepage-cont">
      <DragDropContext onDragEnd={onDragEnd}>{elems}</DragDropContext>
    </div>
  );
}

export default HomePage;
