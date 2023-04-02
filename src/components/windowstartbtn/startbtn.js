import { IoPower } from "react-icons/io5";
import { useSelector } from "react-redux";
import WindowsModalPinnedAppbutton from "./startbtnapps";
import {useState } from "react";
import './startbtn.css'
import { profiles } from "../../assets";

const WindowsModal = () => {
  const originShortcutApps = useSelector((state) => state.desktop.pinnedApps);
  const winModalToggled = useSelector((state) => state.desktop.winModalToggled);
  const [shortcutApps, setShortcutApps] = useState(originShortcutApps);


  const onChangeSearchText = ({ target }) => {
    if (target.value === ""){
      setShortcutApps(originShortcutApps);
      return;
    }

    const filteredApps = originShortcutApps.filter((app) =>
      app.name.toLowerCase().includes(target.value.toLowerCase())
    );
    setShortcutApps(filteredApps);
  };



  return (
    <div
      className='windowmodal'
      style={
        winModalToggled
          ? { position:"absolute"}
          : { display: "none" }
      }
    >
      <div className=" modalappsbox">
        <input
          type="search"
          className="modalinput"
          placeholder="Type here to search"
          onChange={onChangeSearchText}
        />

        <span >Pinned</span>

        {shortcutApps.length > 0 ? (
          <div className="modalapps">
            {shortcutApps.map((app, index) => (
              <WindowsModalPinnedAppbutton
                className="modalapp"
                key={index}
                {...app}
              />
            ))}
          </div>
        ) : (
          <p className="modalapptext">No Apps Found</p>
        )}
      </div>

      <div className="modalfooter">
        <div className="innermodalfooter">
          <div className="modalfooterprofile">
            <img
              className="modalprofile"
              src={profiles.pradeep}
              alt=""
            />
            <span>Pradeep Singh</span>
          </div>
          <IoPower className="powericon" />
        </div>
      </div>
    </div>
  );
};

export default WindowsModal;
