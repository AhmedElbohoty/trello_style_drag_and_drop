import { useId } from "react";

// CSS prefix: .bdheader-
import "./style.css";

function Header() {
  const id = useId();

  return (
    <header className="bdheader">
      <div className="bdheader-checkbox">
        <label htmlFor={id} className="bdheader-checkbox-box">
          <span>&#x2713;</span>
          <input type="checkbox" id={id} className="bdheader-checkbox-input" />
        </label>
        <label htmlFor={id} className="bdheader-checkbox-label">
          Applied
        </label>
      </div>

      <div className="bdheader-arrow">
        <span>&#8601;</span>
      </div>
    </header>
  );
}

export default Header;
