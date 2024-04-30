import { forwardRef } from "react";
import classes from "./Skills.module.css";
import SkillCard from "../components/Skills/SkillCard";
import { useMediaQuery } from "react-responsive";

const frontSkills = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
    percentage: "80%",
  },
  {
    img: "https://t4.ftcdn.net/jpg/00/75/92/23/360_F_75922336_Jz2QgNOx7dnRea9ZI6yQTDtn1vHq5ejF.jpg",
    percentage: "70%",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    percentage: "80%",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    percentage: "80%",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    percentage: "40%",
  },
  {
    img: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    percentage: "60%",
  },
  {
    img: "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png",
    percentage: "70%",
  },
];
const backAndEtcSkills = [
  {
    img: "https://banner2.cleanpng.com/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg",
    percentage: "35%",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png",
    percentage: "35%",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
    percentage: "40%",
  },
  {
    img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    percentage: "70%",
  },
];

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  const isPc = useMediaQuery({
    query: "(min-width: 992px)",
  });
  return (
    <div ref={ref}>
      <div className={classes.intro}>
        Skills
        <div className={classes.underline} />
      </div>

      <div
        className={classes.pcContents}
        style={{ display: isPc ? "flex" : "block" }}
      >
        <SkillCard part={"FrontEnd"} skills={frontSkills} />
        <SkillCard part={"BackEnd & Etc"} skills={backAndEtcSkills} />
      </div>
    </div>
  );
});

export default Skills;
