import { useMediaQuery } from "react-responsive";
import Tag from "./Tag";
import classes from "./WorkCard.module.css";

type Props = {
  backgroundImg: string;
  title: string;
  desc: string;
  projectType: string;
  tags: string[];
};

const WorkCard = ({ backgroundImg, title, desc, tags, projectType }: Props) => {
  const isPc = useMediaQuery({
    query: "(min-width : 992px)",
  });

  return (
    <div className={classes.container}>
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
        <div>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
