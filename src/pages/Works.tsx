import { forwardRef } from "react";
import classes from "./Works.module.css";
import WorkCard from "../components/Works/WorkCard";

const works = [
  {
    backgroundImg:
      "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/4f07c2a1-ce0c-44ea-a382-59e11d1fd89a.jpeg",
    title: "first",
    desc: "이 프로젝트는 음악을 좋아하는 사용자들을 위한 음악 추천 웹 애플리케이션을 개발하는 것을 목표로 합니다. 사용자는 애플리케이션을 통해 자신의 음악 취향을 선택하고, 이를 기반으로 추천된 음악을 들을 수 있습니다.",
    projectType: "팀 프로젝트 (4인)",
    tags: ["ui/ux"],
  },
  {
    backgroundImg:
      "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/4f07c2a1-ce0c-44ea-a382-59e11d1fd89a.jpeg",
    title: "second",
    desc: "이 프로젝트는 음악을 좋아하는 사용자들을 위한 음악 추천 웹 애플리케이션을 개발하는 것을 목표로 합니다. 사용자는 애플리케이션을 통해 자신의 음악 취향을 선택하고, 이를 기반으로 추천된 음악을 들을 수 있습니다.",
    projectType: "팀 프로젝트 (2인)",
    tags: ["js", "react"],
  },
  {
    backgroundImg:
      "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/4f07c2a1-ce0c-44ea-a382-59e11d1fd89a.jpeg",
    title: "3",
    desc: "이 프로젝트는 음악을 좋아하는 사용자들을 위한 음악 추천 웹 애플리케이션을 개발하는 것을 목표로 합니다. 사용자는 애플리케이션을 통해 자신의 음악 취향을 선택하고, 이를 기반으로 추천된 음악을 들을 수 있습니다.",
    projectType: "팀 프로젝트 (4인)",
    tags: ["css", "html"],
  },
  {
    backgroundImg:
      "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/4f07c2a1-ce0c-44ea-a382-59e11d1fd89a.jpeg",
    title: "4",
    desc: "이 프로젝트는 음악을 좋아하는 사용자들을 위한 음악 추천 웹 애플리케이션을 개발하는 것을 목표로 합니다. 사용자는 애플리케이션을 통해 자신의 음악 취향을 선택하고, 이를 기반으로 추천된 음악을 들을 수 있습니다.",
    projectType: "팀 프로젝트 (4인)",
    tags: ["css", "html"],
  },
  {
    backgroundImg:
      "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/4f07c2a1-ce0c-44ea-a382-59e11d1fd89a.jpeg",
    title: "5",
    desc: "이 프로젝트는 음악을 좋아하는 사용자들을 위한 음악 추천 웹 애플리케이션을 개발하는 것을 목표로 합니다. 사용자는 애플리케이션을 통해 자신의 음악 취향을 선택하고, 이를 기반으로 추천된 음악을 들을 수 있습니다.",
    projectType: "개인 프로젝트",
    tags: ["css", "html"],
  },
];

const Works = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={classes.container} ref={ref}>
      <div className={classes.intro}>Projects</div>

      <div className={classes.underline} />

      <div className={classes.body}>
        {works.map((work) => (
          <WorkCard
            key={work.title}
            backgroundImg={work.backgroundImg}
            title={work.title}
            projectType={work.projectType}
            desc={work.desc}
            tags={work.tags}
          ></WorkCard>
        ))}
      </div>
    </div>
  );
});
export default Works;
