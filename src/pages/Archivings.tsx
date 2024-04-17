import { forwardRef } from "react";
import classes from "./Archivings.module.css";
import { IoIosLink } from "react-icons/io";
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
      img: "https://blog.kakaocdn.net/dn/doGbj0/btrrirS5gWy/LsMhIK6L9XkCTDjSFRkMNK/img.png",
      link: "https://velog.io/@wwwkim99/posts",
      summary: "공부한 내용 정리",
    },
  ];

  return (
    <div className={classes.container} ref={ref}>
      <div className={classes.intro}>
        <IoIosLink />
        Archivings
      </div>

      <div
        className={classes.body}
        style={{ maxWidth: isPc ? "56rem" : "40rem" }}
      >
        {Archivingss.map((Archivings) => (
          <ArchivingsCard
            img={Archivings.img}
            link={Archivings.link}
            summary={Archivings.summary}
          />
        ))}
      </div>
    </div>
  );
});
export default Archivings;
