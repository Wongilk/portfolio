import { forwardRef } from "react";
import classes from "./Skills.module.css";
import SkillCard from "../components/Skills/SkillCard";
import { useMediaQuery } from "react-responsive";
import HTML from "../imgs/HTML.png";
import CSS from "../imgs/CSS.jpg";
import JS from "../imgs/JS.png";
import REACT from "../imgs/REACT.png";
import TS from "../imgs/TS.png";
import STYlEDCOMPONENT from "../imgs/STYLED-COMPONENT.png";
import REDUX from "../imgs/REDUX.png";
import NODEJS from "../imgs/NODEJS.jpg";
import MYSQL from "../imgs/MYSQL.png";
import FIGMA from "../imgs/FIGMA.png";
import GIT from "../imgs/GIT.png";

const frontSkills = [
  {
    img: HTML,
    percentage: "80%",
  },
  {
    img: CSS,
    percentage: "70%",
  },
  {
    img: JS,
    percentage: "80%",
  },
  {
    img: REACT,
    percentage: "80%",
  },
  {
    img: TS,
    percentage: "40%",
  },
  {
    img: REDUX,
    percentage: "60%",
  },
  {
    img: STYlEDCOMPONENT,
    percentage: "70%",
  },
];
const backAndEtcSkills = [
  {
    img: NODEJS,
    percentage: "35%",
  },
  {
    img: MYSQL,
    percentage: "35%",
  },
  {
    img: FIGMA,
    percentage: "40%",
  },
  {
    img: GIT,
    percentage: "70%",
  },
];

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <div className={classes.intro}>
        Skills
        <div className={classes.underline} />
      </div>

      <div className={classes.contents}>
        <SkillCard part={"FrontEnd"} skills={frontSkills} />
        <SkillCard part={"BackEnd & Etc"} skills={backAndEtcSkills} />
      </div>
    </div>
  );
});

export default Skills;
