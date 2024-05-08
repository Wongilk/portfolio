import { useState } from "react";
import classes from "../Skills/SkillBar.module.css";
import { motion } from "framer-motion";
type Props = {
  img: string;
  percentage?: string;
};

const SkillBar = ({ img, percentage }: Props) => {
  const [isMouseOn, setIsMouseOn] = useState(false);
  const mouseHandler = () => {
    setIsMouseOn((prev) => !prev);
  };

  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: isMouseOn
          ? `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(${img})`
          : `url(${img})`,
      }}
      onMouseEnter={mouseHandler}
      onMouseLeave={mouseHandler}
    >
      {isMouseOn && <label className={classes.percent}>{percentage}</label>}
    </div>
  );
};

export default SkillBar;
