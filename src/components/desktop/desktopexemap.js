import { useSelector } from 'react-redux';
import DesktopShortcutItem from './desktopexe';
import './DesktopShortcutList.css';


const DesktopShortcutList = () => {
  const shortcutApps = useSelector((state) => state.desktop.shortcutApps);

  return (
    <>
      {shortcutApps.length > 0 && (
        <div className="shortcutapps">
          {shortcutApps.map((app, index) => (
            <DesktopShortcutItem className="deskshorts" key={index} {...app} />
          ))}
        </div>
      )}
    </>
  );
};

export default DesktopShortcutList;

