import Draggable from "react-draggable";
import { BsDash } from "react-icons/bs";
import { IoIosSquareOutline } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { VscChromeRestore } from "react-icons/vsc";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch} from "react-redux";
import { Animate } from "react-simple-animate";
import particles from "./particles";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './about.css'
import resume from "./aboutassets/pradeep.pdf"
import {BsLinkedin} from 'react-icons/bs';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import school from './aboutassets/school.png'
import university from './aboutassets/uni.png'
import {cancelMaximizewindow,maximizewindow,minimizewindow,removewindow,} from "../../redux/desktopSlice";




const Aboutapp = ({ id, height = "80vh", width = "80vw", x = 10, y = 10, minimized = false, maximized = false,
}) => {
  const dispatch = useDispatch();

 /* const particlecount =width>"70vw"?200:150*/



  const handleInit = async (main) => {
    await loadFull(main);
  };


  
  return (
  <>
    <Draggable handle="#draggable"  defaultPosition={{ x: maximized ? 0 : y, y: maximized ? 0 : x }}  position={maximized ? { x: 0, y: 0 } : null}  onDrag={(e, data) => {    dispatch(cancelMaximizewindow(id)); }}>
      <div style={ !maximized  ? { width: width, height: height }  : { width: "100vw", height: "93vh" }  }  className="appcontainer" >
        <div className="topbar">
          <div  className="topdrag"  id="draggable"
          >
            <button className="backarrowbtn">
              <BiArrowBack />
            </button>
            portfolio
          </div>
          <div className="sidebtns">
            <div  className="minimizebtn"  title="Minimize"  onClick={() => {dispatch(minimizewindow({ id, minimized: true }));  }}  >
              <BsDash />
            </div>
            <div
              className="maximizebtn"
              title={maximized ? "Restore" : "Maximize"} onClick={() => {    dispatch(maximizewindow(id));  }}  >
              {maximized ? <VscChromeRestore /> : <IoIosSquareOutline />}
            </div>
            <div className="closebtn"  title="Close"       onClick={() => {   dispatch(removewindow(id));     }}   >
              <IoCloseOutline />
            </div>
          </div>
        </div>
        <div className="overflowcontainer">
        <div >
        <Particles id="particles" options={particles} init={handleInit} />
        <section id="home" className="home " style={ !maximized   ? { width: width, height: height }    : { width: "100vw", height: "93vh" } }>
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm pradeep
          <br />
          Full Stack Web Developer
        </h1>
      </div>
      <Animate
        play
        duration={1}
        delay={0}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button ><a href={resume}  download>Download resume</a></button>
          <a href="https://www.linkedin.com/in/pradeep-singh-b57881207/" ><BsLinkedin className="linkedin"/></a>
        </div>
      </Animate>
    </section>
          </div>

        <div className="education">
          Education
        </div>
                  <VerticalTimeline className="timeline">
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#FFDD40', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - 2025"
    iconStyle={{ background: '#FFDD40', color: '#000' }}
    icon={<img style={{width:"40px",height:"40px"}} src={university}/>}
  >
    <p>
      SRM Institute of science snd technology,ktr,chennai
    </p>
    <h4 className="vertical-timeline-element-title">Btech</h4>
    <h4 className="vertical-timeline-element-subtitle">computer scince engineering</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2020-2021"
    contentStyle={{ background: '#FFDD40', color: '#000' }}
    iconStyle={{ background: '#FFDD40', color: '#000' }}
    icon={<img style={{width:"40px",height:"40px"}} src={school}/>}
  >
    <p>
      Lucknow Public college,Lucknow,Uttarpradesh
    </p>
    <h3 className="vertical-timeline-element-title">10+2(PCM)</h3>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2018 - 2019"
    iconStyle={{ background: '#FFDD40', color: '#000' }}
    contentStyle={{ background: '#FFDD40', color: '#000' }}
    icon={<img style={{width:"40px",height:"40px"}} src={school}/>}
  >
    <p>
      St.Xavier's senior secondary school,Hardoi,Uttarpradesh
    </p>
    <h3 className="vertical-timeline-element-title">Highschool</h3>

  </VerticalTimelineElement>
</VerticalTimeline>
</div>
      </div>
    </Draggable>
    </>
  );
};

export default Aboutapp;
