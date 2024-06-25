import { forwardRef } from "react";
import classes from "./Archivings.module.css";
import ArchivingsCard from "../components/Archivings/ArchivingsCard";
import { useMediaQuery } from "react-responsive";

const Archivings = forwardRef<HTMLDivElement>((props, ref) => {
  const isPc = useMediaQuery({
    query: "(min-width : 992px)",
  });

  const Archivingss = [
    {
      img: "https://www.c-sharpcorner.com/article/create-github-repository-and-add-newexisting-project-using-github-desktop/Images/github.png",
      link: "https://github.com/Wongilk",
      summary: "프로젝트 소스 코드 저장소",
    },
    {
      img: "data:image/png;base64,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",
      link: "https://velog.io/@wwwkim99/posts",
      summary: "공부한 내용 정리",
    },
  ];

  return (
    <div className={classes.container} ref={ref}>
      <div className={classes.intro}>
        Archivings
        <div className={classes.underline} />
      </div>

      <div
        className={classes.body}
        style={{ maxWidth: isPc ? "56rem" : "40rem" }}
      >
        {Archivingss.map((Archiving) => (
          <ArchivingsCard
            key={Archiving.img}
            img={Archiving.img}
            link={Archiving.link}
            summary={Archiving.summary}
          />
        ))}
      </div>
    </div>
  );
});
export default Archivings;
