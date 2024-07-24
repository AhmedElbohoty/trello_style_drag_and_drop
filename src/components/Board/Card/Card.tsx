import user from "assets/user.png";
import StarIcon from "assets/star_icon.svg";
import BarIcon from "assets/bar_icon.svg";

// CSS prefix: .bdcard-
import "./style.css";

function Card() {
  return (
    <div className="bdcard-cont">
      <div className="bdcard-avatar-cont">
        <img src={user} alt="User image" className="bdcard-avatar" />
      </div>

      <div className="bdcard-info">
        <div className="bdcard-name-cont">
          <BarIcon />
          <span className="bdcard-name">Ajay MacAllast</span>
          <span className="bdcard-name-tag">New</span>
        </div>

        <p className="bdcard-location">Cairo</p>
      </div>

      <div className="bdcard-rate">
        <span>4.0</span>
        <StarIcon />
      </div>

      <div className="bdcard-phone-cont">
        <p className="bdcard-phone">234 224 555</p>
        <span className="bdcard-follow-tag">followed</span>
      </div>
    </div>
  );
}

export default Card;
