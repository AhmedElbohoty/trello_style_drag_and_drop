import Board from "components/Board/Board";

import { useAppSelector } from "store/hooks";
import { selectBoardsIds } from "store/slices/appSlice/selectors";

// CSS prefix: .homepage-
import "./style.css";

function HomePage() {
  const boardsIds = useAppSelector(selectBoardsIds);

  const elems = boardsIds.map((id) => <Board key={id} boardId={id} />);
  return <div className="homepage-cont">{elems}</div>;
}

export default HomePage;
