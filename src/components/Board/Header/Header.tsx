import MarkIcon from "assets/mark_icon.svg";
import PlusIcon from "assets/plus_icon.svg";
import UploadIcon from "assets/upload_icon.svg";

import { useBoardContext } from "contexts/BoardContext";
import { useAppSelector } from "store/hooks";
import { selectBoardById } from "store/slices/appSlice/selectors";

// CSS prefix: .bdheader-
import "./style.css";

function Header() {
  const { boardId } = useBoardContext();
  const board = useAppSelector((s) => selectBoardById(s, boardId));

  return (
    <header className="bdheader">
      <div className="bdheader-checkbox">
        <label htmlFor={boardId} className="bdheader-checkbox-box">
          <MarkIcon />
          <input
            type="checkbox"
            id={boardId}
            className="bdheader-checkbox-input"
          />
        </label>
        <p className="bdheader-checkbox-label">{board.name}</p>
      </div>

      {board.is_add_applicants && (
        <button className="bdheader-btn">
          <PlusIcon />
          <span>Add Applicants</span>
        </button>
      )}

      <div className="bdheader-arrow">
        <UploadIcon />
      </div>
    </header>
  );
}

export default Header;
