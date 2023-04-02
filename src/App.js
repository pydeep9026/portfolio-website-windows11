import { useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import DesktopScreen from "./components/screen/DesktopScreen";


function App() {


 useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    }
  }, []);
  const handleContextMenu = (event) => {
    event.preventDefault();
    toast.error(
      <span>
      Right-click is disabled since this website is still in development.<br/> Report bugs/suggestions here: <a href="https://form.typeform.com/to/J29jkJOT" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline",fontSize:"20px",color:"rgb(59,121,255)",cursor:"pointer"}}>feedback</a>
      </span>
      );
  }



  return(<>
  <Toaster/>
    <DesktopScreen />
    </>
  );
}

export default App;
