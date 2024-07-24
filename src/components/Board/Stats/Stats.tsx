// CSS prefix: .bdstats-
import "./style.css";

function Stats() {
  return (
    <section className="bdstats-cont">
      {/* Stats */}
      <div className="bdstats-stats">
        <p className="bdstats-stat">
          <span className="bdstats-stat-value">8</span>
          <span className="bdstats-stat-label">Rejected</span>
        </p>
        <p className="bdstats-stat">
          <span className="bdstats-stat-value">24</span>
          <span className="bdstats-stat-label">Total</span>
        </p>
      </div>

      {/* Border */}
      <div className="bdstats-bar"></div>
    </section>
  );
}

export default Stats;
