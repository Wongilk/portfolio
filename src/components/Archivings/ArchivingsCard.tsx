import classes from "./ArchivingsCard.module.css";
//이미지, 타이틀, 링크, 요약, 설명
type Props = {
  img: string;
  link: string;
  summary: string;
};
const ArchivingsCard = ({ img, link, summary }: Props) => {
  return (
    <div className={classes.container}>
      <img src={img} alt="github" className={classes.img} />
      <div>
        <a href={link} className={classes.link}>
          {link}
        </a>
      </div>
      <p className={classes.summary}>{summary}</p>
    </div>
  );
};

export default ArchivingsCard;
