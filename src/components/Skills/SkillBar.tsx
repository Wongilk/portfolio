import classes from "../Skills/SkillBar.module.css";
import { motion } from "framer-motion";
type Props = {
  img: string;
  percentage?: string;
  // isVisible: boolean;
};

const SkillBar = ({ img, percentage }: Props) => {
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* <img src={img} alt="teck_img" className={classes.teck_img} /> */}
    </div>
  );
};

export default SkillBar;
