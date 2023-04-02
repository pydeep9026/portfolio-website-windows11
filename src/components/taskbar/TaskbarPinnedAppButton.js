import React from "react";
import { useDispatch } from "react-redux";
import './taskbar.css'


const TaskbarAppButton = ({ name, icon, onClick, width = 28, height = 28,
}) => {
  const dispatch = useDispatch();

  return (
    <button className='appbutton' title={name} onClick={(e) => onClick(e, dispatch)}
    >
      <img  src={icon}  alt={`${name} Icon`}  width={width}  height={height} />
    </button>
  );
};

export default TaskbarAppButton;
