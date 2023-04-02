import Draggable from "react-draggable";
import Carousel from 'react-elastic-carousel';
import ProjectData from './projectdata';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosSquareOutline } from "react-icons/io";
import {IoCloseOutline,} from "react-icons/io5";
import { VscChromeRestore} from "react-icons/vsc";
import {BiLinkExternal,BiArrowBack} from 'react-icons/bi';
import { BsDash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { cancelMaximizewindow, maximizewindow, minimizewindow, removewindow,} from "../../redux/desktopSlice";
import { icons } from "../../assets";
import { useRef, useState } from "react";
import data from "./data";
import "./style.css";


const Projectapp = ({  id,  height = "80vh",  width = "80vw",  x = 10,  y = 10,  minimized = false,  maximized = false,
}) => {
  const dispatch = useDispatch();
  const [state, setState] = useState("System");
  const [navState, setNavState] = useState("");
  const [searchTerm, setSearchTerm] = useState("");


  const settings = {
    showArrows: false,
    pagination: true,
    itemsToShow: 1,
    itemsToScroll: 1,
    enableAutoPlay:true, 
    transitionMs: 1000,
    disableArrowsOnEnd: true,
    focusOnSelect: false,
    itemPadding: [0, 0, 0, 0],
  };


  const projectRefs =useRef({});

  function handleMenuClick(e,index) {
    const projectRef = projectRefs.current[index];
    projectRef.scrollIntoView({behavior: "smooth",
    block: "start",
    inline: "nearest",  });
  }






  return (
    <Draggable
      handle="#draggable"
      defaultPosition={{ x: maximized ? 0 : y, y: maximized ? 0 : x }}
      position={maximized ? { x: 0, y: 0 } : null}
      onDrag={() => {
        dispatch(cancelMaximizewindow(id));
      }}
    >
      <div  style={    !maximized      ? { width: '80%', height: '90%',position:"fixed",top:"0px",bottom:"0px" }      : { width: "100%", height: "90%",position:"fixed",top:"0px",bottom:"0px" } }  className="appcontainer"  >
        <div className="topbar">
          <div
            className="topdrag"
            id="draggable"
          >
            <button className="backarrowbtn">
              <BiArrowBack />
            </button>
            portfolio
          </div>
          <div className="sidebtns">
            <div className="minimizebtn" title="Minimize"  onClick={() => {  dispatch(minimizewindow({ id, minimized: true }))    }}  >
              <BsDash />
            </div>
            <div
              className="maximizebtn"
              title={maximized ? "Restore" : "Maximize"}
              onClick={() => {
                dispatch(maximizewindow(id));
              }}
            >
              {maximized ? <VscChromeRestore /> : <IoIosSquareOutline />}
            </div>
            <div  className="closebtn"  title="Close"  onClick={() => {    dispatch(removewindow(id));
              }}
            >
              <IoCloseOutline />
            </div>
          </div>
        </div>
        <div className="container">
        <div >
        <nav className={navState}>
        <div className="nav_top">
          <div  className="account"  onClick={() => {    setState("Accounts");  setNavState("");  }} >
            <img  src={icons.apps.pilars}  alt=""  height="40" width="60" />
            <div>
              <p>Pradeep</p>
              <p>pradeepsi2120032@gmail.com</p>
            </div>
          </div>
          <input
            type="text"
            className="search"
            placeholder="Find a project"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="nav_bottom">
        {data
  .filter(project => project.name.toLowerCase().includes(searchTerm.toLowerCase()))
  .map((project) => {
    return (
      <div
        key={project.id}
        className={`navLink ${project.name === state ? "active" : ""}`}
        onClick={() => {
          setState(project.name);
          setNavState("");
          handleMenuClick(project.name, project.id);
        }}
      >
        <img
          src={icons.apps.project}
          alt=""
          height="16"
          width="16"
        />
        {project.name}
      </div>
    );
})}

          <div className="marker"></div>
        </div>
      </nav>
      <div
        className="navMenuBtn"
        onClick={() => setNavState(navState ? "" : "open")}
      >
        <svg fill="currentColor" viewBox="0 0 48 48" width={24} height={24}>
          <path d="M5.5 9a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37zm0 13.5a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37zm0 13.5a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37z" />
        </svg>
      </div>
        </div>
        <div className="projectsect">
        <div className="project-container">
      {ProjectData.map((project) => (
        <div className="project-cards">
        <div key={project.id} className="project-card" ref={ref => (projectRefs.current[project.id] = ref)} >
          <a href={project.link}><h2 className="project-title">{project.title}<BiLinkExternal className="linklogo"/></h2></a>
              <p className="project-description">{project.description}</p>
          <Carousel {...settings} className='carousel'>
        {project.media.map((item, index) => (
          <div key={index} className="media-item">
            {item.type === 'video' ? (
              <video autoPlay loop muted className="media-video">
                <source src={item.url} type="video/mp4" />
              </video>
            ) : (
              <img src={item.url} alt={project.title} className="media-image" />
            )}
          </div>
        ))}
      </Carousel>
            <div className="project-content">
              <div className="project-technologies">
                {project.technologies.map((technology, index) => (
                  <span key={index} className="project-technology">
                    {technology.icon}
                  </span>
                ))}
              </div>
              <div className="project-screenshot-container">
              <video controls className="projectshort">
              <source src={project.video} type="video/mp4" />
               Your browser does not support the video tag.
              </video>
              </div>
              <div className="project-details">
                <h3>Goals and Objectives:</h3>
                <p>{project.goals}</p>
                <h3>Project Overview:</h3>
                <p>{project.overview}</p>
              </div>
            </div>
          </div>
          </div>
        ))
        }
      </div>
        </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Projectapp;
