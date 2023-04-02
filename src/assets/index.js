const imagesIconsApps = (fileName) => {
  return require(`./images/icons/appicons/${fileName}`);
};
const imagesIconsSkills = (fileName) => {
  return require(`./images/icons/skillicons/${fileName}`);
};

const imagesProfiles = (fileName) => {
  return require(`./images/profiles/${fileName}`);
};

const imagescertificates = (fileName) => {
  return require(`./images/certificates/${fileName}`);
};



const ASSETS = {
  images: {
    icons: {
      apps: {
        windows11: imagesIconsApps("windows11.png"),
        search:imagesIconsApps("search.png"),
        github: imagesIconsApps("github.png"),
        youtube: imagesIconsApps("youtube.png"),
        location: imagesIconsApps("maps.png"),
        linkedin: imagesIconsApps("linkedin.png"),
        vscode: imagesIconsApps("vscode.png"),
        whatsapp: imagesIconsApps("whatsapp.png"),
        winCMD: imagesIconsApps("win-cmd.png"),
        winDefender: imagesIconsApps("win-defender.png"),
        winFileExplorer: imagesIconsApps("win-file-explorer.ico"),
        winMail: imagesIconsApps("win-mail.png"),
        winSearch: imagesIconsApps("win-search.ico"),
        portfolio: imagesIconsApps("portfolio.png"),
        winTrashEmpty: imagesIconsApps("win-trash-empty.ico"),
        winTrashFull: imagesIconsApps("win-trash-full.ico"),
        pilars: imagesIconsApps("pilars.png"),
        project: imagesIconsApps("project.png"),
        projects: imagesIconsApps("projects.png"),
        skills: imagesIconsApps("skills.png"),
      },
      skills: {
        appollo: imagesIconsSkills("apollo.svg"),
        bash: imagesIconsSkills("bash.svg"),
        chartjs: imagesIconsSkills("chartjs.svg"),
        ejs: imagesIconsSkills("ejs.svg"),
        expressjs: imagesIconsSkills("expressjs.png"),
        framer: imagesIconsSkills("framer.png"),
        git: imagesIconsSkills("git.svg"),
        github: imagesIconsSkills("github.svg"),
        javascript: imagesIconsSkills("javascript.svg"),
        materialui: imagesIconsSkills("materialui.svg"),
        mongodb: imagesIconsSkills("mongodb.svg"),
        nextjs: imagesIconsSkills("nextjs.svg"),
        nestjs: imagesIconsSkills("nestjs.svg"),
        nodejs: imagesIconsSkills("nodejs.svg"),
        react: imagesIconsSkills("react.png"),
        redux: imagesIconsSkills("redux.svg"),
        socketio: imagesIconsSkills("socketio.svg"),
        typescript: imagesIconsSkills("typescript.svg"),
        vercel: imagesIconsSkills("vercel.svg"),
        tailwind: imagesIconsSkills("tailwind.svg"),
        css: imagesIconsSkills("css.svg"),
        html: imagesIconsSkills("html.svg"),
        npm: imagesIconsSkills("npm.svg"),
      },
    },
    profiles: {
      pradeep: imagesProfiles("pradeep.png"),
      wallpaper: imagesProfiles("wallpaper.jpg"),
      aboutwallpaper: imagesProfiles("aboutwallpaper.png")
    },
    certificates:{
      certificate1:imagescertificates("certificate1.jpg"),
      certificate2:imagescertificates("certificate2.jpg"),
      certificate3:imagescertificates("certificate3.jpg"),
      certificate4:imagescertificates("certificate4.jpg"),
      certificate5:imagescertificates("certificate5.jpg"),
      certificate6:imagescertificates("certificate6.jpg"),
      certificate7:imagescertificates("certificate7.jpg"),
      certificate8:imagescertificates("certificate8.jpg"),
      certificate9:imagescertificates("certificate9.jpg"),
      certificate10:imagescertificates("certificate10.jpg"),
      certificate11:imagescertificates("certificate11.jpg"),
      certificate12:imagescertificates("certificate12.jpg"),
      certificate13:imagescertificates("certificate13.png"),
      certificate14:imagescertificates("certificate14.png"),
      certificate15:imagescertificates("certificate15.jpg"),
      certificate16:imagescertificates("certificate16.png"),
      certificate17:imagescertificates("certificate17.png"),
    }
  },
};

export const { icons, profiles,certificates } = ASSETS.images;
export default ASSETS;
