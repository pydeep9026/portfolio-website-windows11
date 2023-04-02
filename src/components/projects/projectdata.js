import chatwelcome from "./projectassets/images/chatwelcome.png"
import loginpage from "./projectassets/images/loginpage.png"
import signuppage from "./projectassets/images/signuppage.png"
import chatopen from "./projectassets/images/chatopen.png"
import profile from "./projectassets/images/profile.png"
import report from "./projectassets/images/report.png"
import gpa1 from "./projectassets/images/gpacalcultor.png"
import gpa2 from "./projectassets/images/gpacalc1.png"
import typing1 from './projectassets/images/typing1.png'
import typing2 from './projectassets/images/typing2.png'
import anime1 from './projectassets/images/anime1.png'
import anime2 from './projectassets/images/anime2.png'
import aiimage1 from './projectassets/images/aiimage1.png'
import aiimage2 from './projectassets/images/aiimage2.png'
import tictacimage1 from './projectassets/images/tictac.png'
import tictacimage2 from './projectassets/images/tictac2.png'
import firstport1 from './projectassets/images/firstport.png'
import firstport2 from './projectassets/images/firstport2.png'
import taskmate1 from './projectassets/images/taskmate1.png'
import taskmate2 from './projectassets/images/taskmate2.png'
import winport1 from './projectassets/images/winport1.png'
import winport2 from './projectassets/images/winport2.png'
import winport3 from './projectassets/images/winport3.png'
import winport4 from './projectassets/images/winport4.png'
import winport5 from './projectassets/images/winport5.png'
import winport6 from './projectassets/images/winport6.png'
import './style.css'
import chatvideo from "./projectassets/videos/chatnexus.mp4"
import taskmatevideo from "./projectassets/videos/taskmate.mp4"
import gpavideo from "./projectassets/videos/gpacalculator.mp4"
import typingvideo from "./projectassets/videos/typing.mp4"
import animevideo from "./projectassets/videos/anime.mp4"
import aivideo from "./projectassets/videos/aivideo.mp4"
import tictacvideo from "./projectassets/videos/tiactac.mp4"
import winport from './projectassets/videos/winport.mp4'
import firstportvideo from "./projectassets/videos/firstport.mp4"
import { ReactComponent as MongoDBIcon } from '../../assets/images/icons/skillicons/mongodb.svg';
import ReactIcon from '../../assets/images/icons/skillicons/react.png';
import { ReactComponent as NodeIcon } from '../../assets/images/icons/skillicons/nodejs.svg';
import ExpressIcon from '../../assets/images/icons/skillicons/expressjs.png';
import { ReactComponent as Socketicon } from '../../assets/images/icons/skillicons/socketio.svg';
import { ReactComponent as Reduxicon } from '../../assets/images/icons/skillicons/redux.svg';
import { ReactComponent as Cssicon } from '../../assets/images/icons/skillicons/css.svg';
import {ReactComponent as Javascripticon} from '../../assets/images/icons/skillicons/javascript.svg';
import {ReactComponent as Htmlicon} from '../../assets/images/icons/skillicons/html.svg';



const projectData = [
        {
          id: 0,
          title: "Chat Nexus",
          link:"https://chatnexus.tech",
          description: "real time chat website",
          video: chatvideo,
          media: [
            { type: "image", url: chatopen},
            { type: "image", url: chatwelcome },
            { type: "image", url: loginpage },
            { type: "image", url: signuppage },
            { type: "image", url: profile },
            { type: "image", url: report }
          ],
          technologies: [
            { name: 'MongoDB', icon: <MongoDBIcon className="icon" /> },
            { name: 'reactjs', icon: <img src={ExpressIcon} alt="express Icon" className="icon" />},
            { name: 'Nodejs', icon: <NodeIcon className="icon" /> },
            { name: 'socketio', icon: <Socketicon className="icon" /> },
            { name: 'reactjs', icon: <img src={ReactIcon} alt="React Icon" className="icon" />},
          ],
          tools: ["Visual Studio Code", "GitHub", "Postman"],
          goals:"1.Develop a scalable architecture: A key goal of the development process is to design an architecture.    2.Ensure cross-platform compatibility: With users accessing the chat website from various devices and platforms          3.Create an intuitive user interface: To encourage user engagement, it's essential to develop an intuitive and user-friendly interface.",
          overview:"The website will provide a platform for users to communicate with each other via text, voice messages. The chat website will be designed with an intuitive and user-friendly interface that works on desktop devices.The primary goal of the chat website is to increase user engagement and encourage users to connect with each other. To achieve this goal, we will implement features such as message previews and options for user profiles. We will also optimize message delivery and synchronization to ensure that messages are displayed in real-time without delay.",
        },
        {
            id: 1,
            title: "Portfolio Website",
            link:"https://pradeeps.me",
            description: "Windows gui based personal portfolio website",
            video: winport,
            media: [
              { type: "image", url: winport1 },
              { type: "image", url: winport2 },
              { type: "image", url: winport3 },
              { type: "image", url: winport4 },
              { type: "image", url: winport5 },
              { type: "image", url: winport6 },
            ],
            technologies: [
              { name: 'reactjs', icon: <img src={ReactIcon} alt="React Icon" className="icon" />},
              { name: 'css', icon: <Cssicon className="icon" /> },
              { name: 'redux', icon: <Reduxicon className="icon" /> },
            ],
            tools: ["Visual Studio Code", "GitHub", "Postman"],
            goals:
              "1.Showcase your work: The primary goal of a portfolio website is to showcase your work and highlight your skills and expertise.     Increase visibility: A portfolio website can help increase your visibility and reach a wider audience.    3.Improve user experience: To encourage users to explore your portfolio and spend more time on your website",
            overview:
              " project is to develop a Windows-based portfolio website that showcases our work and expertise. The website will be designed with an intuitive and user-friendly interface that works on various screen sizes, including desktops, laptops, and tablets.",
          },
          {
            id: 2,
            title: "GPA Calculator",
            link:"https://gpacalculator.live",
            description: "calculator with clean responsive ui to claculate gpa",
            video: gpavideo,
            media: [
              { type: "image", url: gpa1 },
              { type: "image", url: gpa2},
            ],
            technologies: [
              { name: 'reactjs', icon: <img src={ReactIcon} alt="React Icon" className="icon" />},
              { name: 'css', icon: <Cssicon className="icon" /> },
            ],
            tools: ["Visual Studio Code", "GitHub", "Postman"],
            goals:
              "The primary goal of a GPA calculator is to accurately calculate a student's GPA based on their grades. Objectives could include developing a user-friendly interface for inputting grades, using a reliable formula for calculating GPA, and displaying the final GPA in a clear and easy-to-understand format.",
            overview:
              "Our project is to develop a GPA calculator that allows students to easily calculate their grade point average based on their grades. The primary goal of the calculator is to provide a reliable and user-friendly tool for tracking academic performance and calculating GPA.",
          },
          {
            id: 3,
            title: "typing test website",
            link:"https://typing-test-9026.netlify.app",
            description: "typing test website that shows typing speed in real time",
            video: typingvideo,
            media: [
              { type: "image", url: typing1},
              { type: "image", url: typing2 },
            ],
            technologies: [
              { name: 'javascript', icon: <Javascripticon className="icon" /> },
              { name: 'css', icon: <Cssicon className="icon" /> },
              { name: 'html', icon: <Htmlicon className="icon" /> },
            ],
            tools: ["Visual Studio Code", "GitHub", "Postman"],
            goals:
              "Develop a user-friendly typing test website Provide an accurate measure of typing speed and accuracy Enhance user experience through engaging interface ",
            overview:
              "Implement a responsive design with CSS to ensure compatibility across devices Develop an accurate algorithm for measuring typing speed ",
          },
          {
            id: 4,
            title: "Taskmate",
            link:"https://taskmate9026.netlify.app/",
            description: "a website designed to help you manage your tasks and stay organized.",
            video: taskmatevideo,
            media: [
              { type: "image", url: taskmate1 },
              { type: "image", url: taskmate2 },
            ],
            technologies: [
              { name: 'reactjs', icon: <img src={ReactIcon} alt="React Icon" className="icon" />},
              { name: 'css', icon: <Cssicon className="icon" /> },
            ],
            tools: ["Visual Studio Code", "GitHub", "Postman"],
            goals:
              "Task Website is a website designed to help you manage your tasks and stay organized.(made for task given by ieee recruitment team)",
            overview:
              "The website will have a simple and intuitive user interface to make it easy for users to use.",
          },
          {
            id: 5,
            title: "Anime Search Website",
            link:"https://anime-search-9026.netlify.app",
            description: "anime search website based on jikan api",
            video: animevideo,
            media: [
              { type: "image", url: anime1 },
              { type: "image", url: anime2 },
            ],
            technologies: [
              { name: 'reactjs', icon: <img src={ReactIcon} alt="React Icon" className="icon" />},
              { name: 'css', icon: <Cssicon className="icon" /> },
            ],
            tools: ["Visual Studio Code", "GitHub", "Postman"],
            goals:
              "Develop a user-friendly anime search website Provide an extensive library of anime titles with comprehensive information Enhance user experience through engaging interface and interactive features",
            overview:
              "Build a responsive design with React to ensure compatibility across devices Develop a comprehensive database of anime titles with relevant metadata such as genre, synopsis, and rating",
          },
          {
            id: 6,
            title: "Ai Image Generator",
            link:"https://image-generator-9026.netlify.app",
            description: "An online store for buying and selling products",
            video: aivideo,
            media: [
              { type: "image", url: aiimage1 },
              { type: "image", url: aiimage2 },
            ],
            technologies: [
              { name: 'reactjs', icon: <img src={ReactIcon} alt="React Icon" className="icon" />},
              { name: 'css', icon: <Cssicon className="icon" /> },
            ],
            tools: ["Visual Studio Code", "GitHub", "Postman"],
            goals:
              "Develop an AI-powered image generator using the OpenAI API Provide users with the ability to generate high-quality images based on input parameters",
            overview:
              "Integrate the OpenAI API into the image generator and ensure compatibility with the latest version of the API Develop a user-friendly interface that enables users to input their desired parameters such as image size, style, and content",
          },
          {
            id: 7,
            title: "tic tac toe game",
            link:"https://tic-tac-toe-9026.netlify.app",
            description: "Game made with javscript",
            video: tictacvideo,
            media: [
              { type: "image", url: tictacimage1 },
              { type: "image", url: tictacimage2 },
            ],
            technologies: [
              { name: 'javascript', icon: <Javascripticon className="icon" /> },
              { name: 'css', icon: <Cssicon className="icon" /> },
              { name: 'html', icon: <Htmlicon className="icon" /> },
            ],
            tools: ["Visual Studio Code", "GitHub", "Postman"],
            goals:
              "Develop a user-friendly tic-tac-toe game using JavaScript",
            overview:
              "Develop a responsive design with CSS and JavaScript to ensure compatibility across devices",
          },
          {
            id: 8,
            title: "portfolio website",
            description: "simple portfolio website",
            video: firstportvideo,
            media: [
              { type: "image", url: firstport1 },
              { type: "image", url: firstport2 },
            ],
            technologies: [
            { name: 'css', icon: <Cssicon className="icon" /> },
            { name: 'html', icon: <Htmlicon className="icon" /> },],
            tools: ["Visual Studio Code", "GitHub", "Postman"],
            goals:
              "Develop a simple and effective portfolio website using HTML and CSS Showcase personal projects and professional experience",
            overview:
              "Develop a responsive design with CSS and HTML to ensure compatibility across devices Create a clear and concise layout that showcases personal projects and professional experience",
          },
        ]
   
  
  export default projectData;
  
  
  