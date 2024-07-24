import { useBoardContext } from "contexts/BoardContext";

import { useAppSelector } from "store/hooks";
import {
  selectBoardName,
  selectBoardRegected,
  selectBoardTotal,
} from "store/slices/appSlice/selectors";

// CSS prefix: .bdstats-
import "./style.css";

function Stats() {
  const { boardId } = useBoardContext();
  const name = useAppSelector((s) => selectBoardName(s, boardId));
  const total = useAppSelector((s) => selectBoardTotal(s, boardId));
  const rejected = useAppSelector((s) => selectBoardRegected(s, boardId));

  return (
    <section className="bdstats-cont">
      {/* Stats */}
      <div className="bdstats-stats">
        <p className="bdstats-stat">
          <span className="bdstats-stat-value">{rejected}</span>
          <span className="bdstats-stat-label">Rejected</span>
        </p>
        <p className="bdstats-stat">
          <span className="bdstats-stat-value">{total}</span>
          <span className="bdstats-stat-label">Total</span>
        </p>
      </div>

      {/* Border */}
      <div className="bdstats-bar" data-name={name}></div>
    </section>
  );
}

export default Stats;
