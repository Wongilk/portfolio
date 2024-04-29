import { forwardRef } from "react";
import classes from "./Skills.module.css";
import SkillCard from "../components/Skills/SkillCard";

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
];
const backEnd = [];

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  const front = frontSkills.map((skill) => (
    <SkillCard img={skill.img} percentage={skill.percentage} />
  ));
  return (
    <div className={classes.container} ref={ref}>
      {front}
    </div>
  );
});

export default Skills;
