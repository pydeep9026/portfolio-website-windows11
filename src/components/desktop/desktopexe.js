import React from "react";
import { useDispatch } from "react-redux";
import './DesktopShortcutList.css';

const DesktopShortcutItem = ({name = "Unnamed",icon,onClick,width = 35,height = 35,
}) => {
  
  const dispatch = useDispatch();

  return (
    <button className="shortcutbutton" onClick={(e) => onClick(e, dispatch)}
    >
      <div >
        <img src={icon} alt={`${name.toLowerCase()}_icon`} width={width} height={height}/>
        <p >{name}</p>
      </div>
    </button>
  );
};

export default DesktopShortcutItem;
