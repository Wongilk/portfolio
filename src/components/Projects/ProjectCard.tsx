import { useMediaQuery } from "react-responsive";
import classes from "./ProjectCard.module.css";
import Tag from "./Tag";
import { motion } from "framer-motion";
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
  const isPc = useMediaQuery({
    query: "(min-width : 992px)",
  });

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
        className={classes.contents}
        style={{ flexWrap: isPc ? "nowrap" : "wrap" }}
      >
        <img
          src={backgroundImg}
          alt="backgroundImg"
          style={{ width: isPc ? "50%" : "100%" }}
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
