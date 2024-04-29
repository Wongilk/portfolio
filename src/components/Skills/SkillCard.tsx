import classes from "../Skills/SkillCard.module.css";

type Props = {
  img: string;
  percentage?: string;
};
const SkillCard = ({ img, percentage = "70%" }: Props) => {
  return (
    <div className={classes.container}>
      <div className={classes.img_box}>
        <img src={img} alt="teck img" />
      </div>

      <div className={classes.bar_container}>
        <div className={classes.full_bar}>
          <div className={classes.bar} style={{ width: percentage }}></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
