import classes from "./ProjectCard.module.css";
import Tag from "./Tag";
import { motion } from "framer-motion";
import { useIsTablet } from "../../utils/MediaQuery";

type Props = {
  index: number;
  backgroundImg: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string;
  stack: string;
  projectType: string;
  git: string;
};

const ProjectCard = ({
  index,
  backgroundImg,
  title,
  shortDesc,
  longDesc,
  projectType,
  features,
  stack,
  git,
}: Props) => {
  return (
    <motion.div
      className={classes.container}
      initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
    >
      <p className={classes.title}>{title}</p>
      <p className={classes.projectType}>{projectType}</p>

      <div
        className={
          useIsTablet() ? classes.tablet_contents : classes.pc_contents
        }
      >
        <img
          src={backgroundImg}
          alt="backgroundImg"
          className={useIsTablet() ? classes.tablet_img : classes.pc_img}
        />
        <div className={classes.description}>
          <p>{shortDesc}</p>
          <p>{longDesc}</p>
          <hr />
          <Tag label="주요 기능" value={features} />
          <Tag label="Stack" value={stack} />
          <Tag label="Git" value={git} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
