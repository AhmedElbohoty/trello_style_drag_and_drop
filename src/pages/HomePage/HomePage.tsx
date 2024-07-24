import Board from "components/Board/Board";

// CSS prefix: .homepage-
import "./style.css";

function HomePage() {
  return (
    <div className="homepage-cont">
      <Board />
      <Board />
      <Board />
    </div>
  );
}

export default HomePage;
