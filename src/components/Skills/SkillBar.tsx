import classes from "../Skills/SkillBar.module.css";
import { motion } from "framer-motion";
type Props = {
  img: string;
  percentage?: string;
  // isVisible: boolean;
};

const SkillBar = ({ img, percentage = "70%" }: Props) => {
  return (
    <div className={classes.container}>
      <div className={classes.img_box}>
        <img src={img} alt="teck img" />
      </div>
      <div className={classes.bar_container}>
        <div className={classes.full_bar}>
          <motion.div
            className={classes.bar}
            viewport={{ once: true }}
            whileInView={{
              transform: `scaleX(${percentage})`,
            }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
