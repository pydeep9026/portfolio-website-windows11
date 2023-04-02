import { useState, useEffect, useRef } from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { GiSpeaker } from "react-icons/gi";
import moment from "moment";
import { useSelector } from "react-redux";
import TaskbarPinnedAppButton from "./TaskbarPinnedAppButton";
import { setstartToggled } from "../../redux/desktopSlice";
import song from "./spiderverse.mp3"
import { BiBluetooth, BiMoon } from "react-icons/bi";
import { IoAccessibilityOutline, IoAirplaneOutline } from "react-icons/io5";
import { TbBatteryEco, TbBrightnessDown } from "react-icons/tb";
import "./taskbar.css"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {TbBattery4,} from "react-icons/tb";
import { icons } from "../../assets";
import { toast } from "react-hot-toast";




const Taskbar = () => {
  const pinnedApps = useSelector((state) => state.desktop.pinnedApps);
  const winModalToggled = useSelector((state) => state.desktop.winModalToggled);

  const [hours, setHours] = useState(moment().format("HH[:]mm"));
  const [date, setDate] = useState(moment().format("DD[/]MM[/]YYYY"));
  const [dateTitle, setTitle] = useState(moment().format("dddd, DD MMMM YYYY"));
  const [featuresToggled, setFeaturesToggled] = useState(false);
  const [focusassist,setfocusassist]=useState("")
  const [brightness, setBrightness] = useState(0);
  const [volume, setVolume] = useState(50);
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.audio.current.volume = volume / 100;
    }
  }, [volume]);

  const volumeControl = (
    <div className="volumecontrol">
       <div class="volumelevel">&nbsp;&nbsp;{`${volume}%`}</div>
    </div>
  );


  const _updateTime = () => {
    return setInterval(() => {
      setHours(moment().format("HH[:]mm"));
      setDate(moment().format("DD[/]MM[/]YYYY"));
      setTitle(moment().format("dddd, DD MMMM YYYY"));
    }, 1000);
  };

  useEffect(() => {
    const updateTimeInterval = _updateTime();
    return () => clearInterval(updateTimeInterval);
  }, []);


    const [color1, setColor1] = useState('#db9ee5');
    const [color2, setColor2] = useState('#33373a');
    const [color3, setColor3] = useState('#33373a');
    const [color4, setColor4] = useState('#33373a');
    const [color5, setColor5] = useState('#33373a');
    const [color6, setColor6] = useState('#33373a');
  
    const handleClick1 = () => {
      setColor1(color1 === '#db9ee5' ? '#33373a' : '#db9ee5');
    };
    const handleClick2 = () => {
      setColor2(color2 === '#db9ee5' ? '#33373a' : '#db9ee5');
    };
    const handleClick3 = () => {
      setColor3(color3 === '#db9ee5' ? '#33373a' : '#db9ee5');
    };
    const handleClick4 = () => {
      setColor4(color4 === '#db9ee5' ? '#33373a' : '#db9ee5');
      setBrightness(brightness==="100"?"0":"100")
    };
    const handleClick5 = () => {
      setColor5(color5 === '#db9ee5' ? '#33373a' : '#db9ee5');
      setfocusassist(focusassist===""?"rgba(255, 165, 1, 0.01":"")
    };
    const handleClick6 = () => {
      setColor6(color6 === '#db9ee5' ? '#33373a' : '#db9ee5');
    };



  const handleBrightnessChange = (event) => {
    setBrightness(event.target.value);
  };



  return (<>
   <div style={{ backgroundColor: focusassist }} className="focuscontroller" ></div>
    <div style={{ backgroundColor: `rgba(0, 0, 0, ${brightness / 200})` }} className="brightnesscontroller" ></div>
    <div className="taskcontainer">
      <div className="innercontainer">
        <div className="innerinnercontainer">
          <TaskbarPinnedAppButton
            name="Start"
            icon={icons.apps.windows11}
            onClick={(e, dispatch) => { dispatch(setstartToggled(!winModalToggled));
            }}
          />
          <div className="search">
            <img src={icons.apps.search} alt="search"/>
          <input type="search" placeholder="Search"/>
          </div>
              {pinnedApps.map((app, index) => (
                <TaskbarPinnedAppButton
                  key={index}
                  {...app}
                />
              ))}
        </div>
        <div className="sidemenu">
          <div className="languagebtn">
            <div
              className="language"
              onClick={() => toast.error("translation feature coming soon!")}
              title="language"
            >
              ENG IN
            </div>
          </div>
          <div className="relative">
            <div
              className="taskbuttons"
              onClick={() => {
                setFeaturesToggled((prev) => !prev);
              }}
            >
              <div className="taskpins">
                <div className="taskpin">
                  <AiOutlineWifi
                    size={19}
                    title="Internet access"
                  />
                </div>
                <div className="taskpin">
                  <GiSpeaker size={19} title="Speakers" />
                </div>
                <div className="taskpin">
                  <TbBattery4 size={19} title="battery level" />
                </div>
              </div>
            </div>
            {featuresToggled && (
              <>
              <div className="songplayer">
              <AudioPlayer
        className="innersongplayer"
        customVolumeControls={[volumeControl]}
        customAdditionalControls={[]}
        src={song}
        ref={playerRef}
      />
              </div>
  <div className="taskmotion">
    <div className="innertaskmotion">
      <div className="innerinnermotion">
        <div className="singletask">
        <div className="taskicon"
          style={{ backgroundColor: color1}}
          onClick={handleClick1}
          >
            <AiOutlineWifi size={19} />
          </div>
          <p className="taskname">Wi-Fi</p>
        </div>
        <div className="singletask">
          <div className="taskicon"
          style={{ backgroundColor: color2 }}
          onClick={handleClick2}
          >
            <BiBluetooth size={19} />
          </div>
          <p className="taskname">Bluetooth</p>
        </div>
        <div className="singletask">
          <div className="taskicon"
          style={{ backgroundColor: color3 }}
          onClick={handleClick3}>
            <IoAirplaneOutline size={19} />
          </div>
          <p className="taskname">Airplane mode</p>
        </div>
        <div className="singletask">
          <div className="taskicon"
          style={{ backgroundColor: color4 }}
          onClick={handleClick4}>
            <TbBatteryEco size={19} />
          </div>
          <p className="taskname">Battery saver</p>
        </div>
        <div className="singletask">
          <div className="taskicon" 
          style={{ backgroundColor: color5 }}
          onClick={handleClick5}>
            <BiMoon size={19} />
          </div>
          <p className="taskname">Focus assist</p>
        </div>
        <div className="singletask">
          <div className="taskicon"
          style={{ backgroundColor: color6 }}
          onClick={handleClick6}>
            <IoAccessibilityOutline size={19} />
            </div>
            <p className="taskname">Accessibility</p>
          </div>
        </div>


                  <div className="taskslider">
                    <div className=" sliderlogo">
                      <TbBrightnessDown size={23} />
                    </div>
                    <input
                       type="range"
                       min="0"
                       max="100"
                       value={brightness}
                       className="inputrange"
                       onChange={handleBrightnessChange}
                    />
                  </div>
                  <div className="taskslider">
                    <div className="sliderlogo">
                      <GiSpeaker size={23} />
                    </div>
                    <input
                    type="range"
                    min="0"
                    max="100"
                     value={volume}
                    className="volumerange"
                    onChange={(e) =>{ setVolume(e.target.value)
                    }}
                    />

                  </div>
                </div>
              </div>
              </>
            )}
          </div>
          <div className="relative">
            <div
              className="timestamp"
              onClick={() => {
                setFeaturesToggled(false);
              }}
            >
              <div
                className="dateandtime"
                title={dateTitle}
              >
                <div className="displayedtime">
                  <span>{hours}</span>
                  <span>{date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Taskbar;
