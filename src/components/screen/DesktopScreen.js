import { useSelector } from "react-redux"
import Taskbar from "../taskbar/Taskbar"
import DesktopShortcutList from "../desktop/desktopexemap";
import WindowsModal from "../windowstartbtn/startbtn";
import { profiles} from "../../assets";
import './DesktopScreen.css'





const DesktopScreen = () => {
  const activeWindows = useSelector((state) => state.desktop.activeWindows);
  const wallpaper=profiles.wallpaper



  return (<>
    <div
      className="dcontainer"
      style={{ backgroundImage: `url(${wallpaper})`}}
    >
      <div className="active-window">
        {activeWindows.length > 0 && (
          <>
            {activeWindows
              .filter((win) => win.minimized === false)
              .map((  {   id,   height,   width,   x,  y, title,  minimized, maximized,  Component,},  index  ) => (
                  <Component  key={index}  id={id}  height={height}  width={width}  x={x}  y={y}  title={title}  minimized={minimized}  maximized={maximized}  />  ) )}
          </>
        )}
        <DesktopShortcutList />
        <Taskbar />
      </div>
      <WindowsModal />
    </div>
    </>
  );
};

export default DesktopScreen;


