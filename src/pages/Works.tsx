import { forwardRef } from "react";
import classes from "./Works.module.css";
import WorkCard from "../components/Works/WorkCard";

const works = [
  {
    backgroundImg:
      "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/4f07c2a1-ce0c-44ea-a382-59e11d1fd89a.jpeg",
    title: "first",
    tags: ["ui/ux"],
  },
  {
    backgroundImg:
      "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/4f07c2a1-ce0c-44ea-a382-59e11d1fd89a.jpeg",
    title: "second",
    tags: ["js", "react"],
  },
  {
    backgroundImg:
      "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/4f07c2a1-ce0c-44ea-a382-59e11d1fd89a.jpeg",
    title: "3",
    tags: ["css", "html"],
  },
  {
    backgroundImg:
      "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/4f07c2a1-ce0c-44ea-a382-59e11d1fd89a.jpeg",
    title: "4",
    tags: ["css", "html"],
  },
  {
    backgroundImg:
      "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/4f07c2a1-ce0c-44ea-a382-59e11d1fd89a.jpeg",
    title: "5",
    tags: ["css", "html"],
  },
];

const Works = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={classes.container} ref={ref}>
      <p className={classes.p}>Check Out My Projects</p>

      <hr className={classes.hr} />

      <div className={classes.body}>
        {works.map((work) => (
          <WorkCard
            key={work.title}
            backgroundImg={work.backgroundImg}
            title={work.title}
            tags={work.tags}
          ></WorkCard>
        ))}
      </div>
    </div>
  );
});
export default Works;
