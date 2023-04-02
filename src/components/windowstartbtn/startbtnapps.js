import React from "react";
import { useDispatch } from "react-redux";
import './startbtn.css'

const WindowsModalPinnedAppbutton = ({
  className = "",
  name = "Unnamed",
  icon,
  onClick,
  width = 35,
  height = 35,
}) => {
  const dispatch = useDispatch();

  return (
    <button
      className= 'windowmodalpinnedappbutton'
      onClick={(e) => onClick(e, dispatch)}
    >
      <div className="pinnedapp">
        <img
          className="pinnedappimage"
          src={icon}
          alt={`${name} Icon`}
          width={width}
          height={height}
        />
        <p className="pinnedappname">{name}</p>
      </div>
    </button>
  );
};

export default WindowsModalPinnedAppbutton;
