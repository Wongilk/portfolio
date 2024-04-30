import SkillBar from "./SkillBar";
import classes from "./SkillCard.module.css";

type Props = {
  part: string;
  skills: Skill[];
};

type Skill = {
  img: string;
  percentage: string;
};

const SkillCard = ({ part, skills }: Props) => {
  const renderSkills = skills.map((skill) => (
    <SkillBar img={skill.img} percentage={skill.percentage} />
  ));
  return (
    <div className={classes.container}>
      <p>{part}</p>
      {renderSkills}
    </div>
  );
};

export default SkillCard;
