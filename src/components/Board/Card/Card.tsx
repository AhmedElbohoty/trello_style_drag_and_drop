import { Draggable } from "react-beautiful-dnd";

import avatar from "assets/avatar.png";
import StarIcon from "assets/star_icon.svg";
import BarIcon from "assets/bar_icon.svg";

import { UserId } from "types/user";
import { useAppSelector } from "store/hooks";
import { selectUserById } from "store/slices/appSlice/selectors";

// CSS prefix: .bdcard-
import "./style.css";

type CardProps = {
  userId: UserId;
  index: number;
};

function Card({ userId, index }: CardProps) {
  const user = useAppSelector((s) => selectUserById(s, userId));

  const { name, location, status, rate, phone, is_new, is_followed } = user;

  return (
    <Draggable draggableId={userId} index={index}>
      {(provided) => {
        return (
          <div
            className="bdcard-cont"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="bdcard-avatar-cont">
              <img src={avatar} alt={name} className="bdcard-avatar" />
            </div>

            <div className="bdcard-info">
              <div className="bdcard-name-cont" data-status={status}>
                <BarIcon />
                <span className="bdcard-name">{name}</span>
                {is_new && <span className="bdcard-name-tag">New</span>}
              </div>

              <p className="bdcard-location">{location}</p>
            </div>

            <div className="bdcard-rate">
              <span>{rate}</span>
              <StarIcon />
            </div>

            <div className="bdcard-phone-cont">
              <p className="bdcard-phone">{phone}</p>
              {is_followed && (
                <span className="bdcard-follow-tag">followed</span>
              )}
            </div>
          </div>
        );
      }}
    </Draggable>
  );
}

export default Card;
