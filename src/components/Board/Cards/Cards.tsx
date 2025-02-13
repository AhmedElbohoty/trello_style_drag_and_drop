import Card from "components/Board/Card/Card";
import { useAppSelector } from "store/hooks";
import { selectBoardUserIds } from "store/slices/appSlice/selectors";
import { useBoardContext } from "contexts/BoardContext";

// CSS prefix: .bdcards-
import "./style.css";

function Cards() {
  const { boardId } = useBoardContext();
  const userIds = useAppSelector((s) => selectBoardUserIds(s, boardId));

  const elements = userIds.map((id, index) => (
    <Card key={id} userId={id} index={index} />
  ));

  return <section className="bdcards-cont">{elements}</section>;
}

export default Cards;
