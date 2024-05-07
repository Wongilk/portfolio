import SkillBar from "./SkillBar";
import classes from "./SkillCard.module.css";
import { motion } from "framer-motion";

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
    <motion.div
      className={classes.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
    >
      <p className={classes.part}>{part}</p>
      <div className={classes.skills}>{renderSkills}</div>
    </motion.div>
  );
};

export default SkillCard;
