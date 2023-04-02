import particles from "./particle";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Box, Grid, Typography, Container, Toolbar } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { cancelMaximizewindow, maximizewindow, minimizewindow, removewindow, } from "../../redux/desktopSlice";
  import Draggable from "react-draggable";
  import { useDispatch} from "react-redux";
  import { BsDash } from "react-icons/bs";
import { IoIosSquareOutline } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { VscChromeRestore } from "react-icons/vsc";
import { BiArrowBack } from "react-icons/bi";
import { useState,React,useMemo, useRef, useEffect } from "react";
import './skills.css'
import ReactECharts from 'echarts-for-react';
import { useTrail, animated as a } from "react-spring"
import { useIntersection } from "react-use"
import Icon from "./icon"
import logos from './logos'
import CertificateData from './certificateData';


 const chartoption = {
  title: {
    text: 'Skill Chart',
    top:"top"
  },
  xAxis: {
    type: 'category',
    data: ['React JS', 'Node JS', 'Mongo DB', 'Express JS', 'HTML5', 'CSS3', 'Javascript'],
    axisLabel: { interval: 0, rotate: 30 }
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [160, 120, 130, 80, 180, 160, 150],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
        backgroundColor:"#462153"
      }
    }
  ]
};

 const radaroption = {
  title: {
    text: 'Productivity Radar Chart'
  },
  radar: {
    indicator: [
      { name: 'Commits', max: 6500 },
      { name: 'projects', max: 16000 },
      { name: 'deploys', max: 30000 },
      { name: 'Time', max: 38000 },
      { name: 'Goals', max: 52000 },
      { name: 'tasks', max: 25000 }
    ]
  },
  series: [
    {
      name: 'A vs B',
      type: 'radar',
      data: [
        {
          value: [5500, 3000, 14000, 35000, 50000, 18000],
          name: 'A'
        },
        {
          value: [6100, 14000, 20000, 26000, 42000, 21000],
          name: 'B'
        }
      ]
    }
  ]
};


const useStyles = makeStyles(theme =>
  createStyles({
    gridItem: {
      marginBottom: theme.spacing(3)
    },
    title: {
      marginTop: theme.spacing(3)
    },
    gridContainer: {
      marginTop: theme.spacing(4)
    },
    illustrationContainer: {
      margin: "auto"
    },
    illustration: {
      width: "80%",
      height: "auto",
      [theme.breakpoints.down("md")]: {
        width: "100%"
      }
    }
  })
)



const SkillsApp = ({ id, title = "", height = "80vh", width = "80vw", x = 10, y = 10, minimized = false, maximized = false }) => {

    const dispatch = useDispatch();

    const handleInit = async (main) => {
      await loadFull(main);
    };






    
    const iconsArray = useMemo(
      () => [
        logos.nodejs,
        logos.react,
        logos.mongodb,
        logos.git,
        logos.github,
        logos.javascript,
        logos.expressjs,
        logos.tailwind,
        logos.html,
        logos.css,
        logos.npm,
        logos.socketio,
        logos.redux
      ],
      []
    )
    const classes = useStyles()
    const intersectionRef = useRef(null)
    const intersectionEnter = useIntersection(intersectionRef, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3
    })
    const intersectionExit = useIntersection(intersectionRef, {
      root: null,
      rootMargin: "0px",
      threshold: 0
    })
    const [toggle, setToggle] = useState(false)
    const trail = useTrail(iconsArray.length, {
      config: { mass: 1, tension: 375, friction: 25 },
      trail: 400 / iconsArray.length,
      transform: toggle ? "scale(1)" : "scale(0)",
      from: { transform: "scale(0)" },
      reset: !toggle
    })
    useEffect(() => {
      if (intersectionEnter?.isIntersecting) {
        setToggle(true)
      }
    }, [intersectionEnter])
  
    useEffect(() => {
      if (!intersectionExit?.isIntersecting) {
        setToggle(false)
      }
    }, [intersectionExit])
  
    const renderIcons = () => {
      return trail.map(({ transform }, index) => (
        <Grid
          key={iconsArray[index].label}
          item
          className={classes.gridItem}
          md={2}
          xs={3}
        >
          <a.div
            key={index}
            style={{
              transform
            }}
          >
            <a.div>
              <Icon
                label={iconsArray[index].label}
                logo={iconsArray[index].logo}
                spin={iconsArray[index].spin}
                invert={iconsArray[index].invert}
              ></Icon>
            </a.div>
          </a.div>
        </Grid>
      ))
    }





    const chartRef=useRef(null)
    const skillRef = useRef(null);
    const certiRef = useRef(null);
    useEffect(() => {
      if (skillRef.current && certiRef.current && chartRef.current) {
        certiRef.current.style.marginTop = `${chartRef.current.offsetHeight + skillRef.current.offsetHeight }px`;
      }
    }, [skillRef.current?.offsetHeight]);
  

  

  
  
  
  
    
    return (
    <>
  
      <Draggable
        handle="#draggable"
        defaultPosition={{ x: maximized ? 0 : y, y: maximized ? 0 : x }}
        position={maximized ? { x: 0, y: 0 } : null}
        onDrag={(e, data) => { dispatch(cancelMaximizewindow(id));  }}
      >
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={
            !maximized
              ? { width: width,backgroundColor:"#191919", height: height }
              : { width: "100vw",backgroundColor:"#191919", height: "93vh" }
          }
          className="appcontainer"
        >
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
            <div
              className="minimizebtn"
              title="Minimize"
              onClick={() => { dispatch(minimizewindow({ id, minimized: true }));
              }}
            >
              <BsDash />
            </div>
            <div
              className="maximizebtn"
              title={maximized ? "Restore" : "Maximize"}
              onClick={() => {  dispatch(maximizewindow(id));
              }}
            >
              {maximized ? <VscChromeRestore /> : <IoIosSquareOutline />}
            </div>
            <div
              className="closebtn"
              title="Close"
              onClick={() => { dispatch(removewindow(id));
              }}
            >
              <IoCloseOutline />
            </div>
          </div>
        </div>
    <div className="overflowcontainer">
    <Particles id="particles" options={particles} init={handleInit} />
    <div className="skill-chart"  ref={chartRef}>
    <ReactECharts
    option={chartoption}
    className="barchart"
    />
    <ReactECharts option={radaroption} className="radarchart" />
    </div>
    <div className="stackcontainer">
    <Toolbar id="skills" />
<Container component="section" className="techstack"  >
  <Grid ref={skillRef}  container>
    <Box clone order={{ xs: 1, md: 2 ,xl:4}}
    style={{ minWidth: "100%", minHeight: "100%" }}
    >
      <Grid xs={12} md={6} xl={4} item>
        <Typography
          className={classes.title}
          align="center"
          variant="h2"
        >
          My Tech Stack
        </Typography>
        <div>
          <Grid
            container
            className={classes.gridContainer}
            ref={intersectionRef}
          >
            {renderIcons()}
          </Grid>
        </div>
      </Grid>
    </Box>
  </Grid>
</Container>
</div>
<div className="certi" ref={certiRef}>
<div className="certificate-section">
      <Typography variant="h2" className="certificate-header">My Certificates</Typography>
      <div className="certificate-grid">
        {CertificateData.map((certificate) => (
          <div key={certificate.id} className="certificate-card">
            <img src={certificate.image} alt={certificate.title} className="certificate-image" />
          </div>
        ))}
      </div>
    </div>

</div>
</div>
        </div>
      </Draggable>
      </>
    );
  };
  
  export default SkillsApp;
  