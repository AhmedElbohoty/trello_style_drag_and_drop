import { useId } from "react";

import MarkIcon from "assets/mark_icon.svg";
import PlusIcon from "assets/plus_icon.svg";
import UploadIcon from "assets/upload_icon.svg";

// CSS prefix: .bdheader-
import "./style.css";

function Header() {
  const id = useId();

  return (
    <header className="bdheader">
      <div className="bdheader-checkbox">
        <label htmlFor={id} className="bdheader-checkbox-box">
          <MarkIcon />
          <input type="checkbox" id={id} className="bdheader-checkbox-input" />
        </label>
        <label htmlFor={id} className="bdheader-checkbox-label">
          Applied
        </label>
      </div>

      <button className="bdheader-btn">
        <PlusIcon />
        <span>Add Applicants</span>
      </button>

      <div className="bdheader-arrow">
        <UploadIcon />
      </div>
    </header>
  );
}

export default Header;
