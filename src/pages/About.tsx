import { forwardRef } from "react";
import classes from "./About.module.css";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={classes.container} ref={ref}>
      {/*한 줄 소개*/}
      <div className={classes.body}>
        <div className={classes.left}>
          About
          <hr className={classes.hr} />
        </div>
        <div>
          <p className={classes.short}>성장하고자 노력하는 사람</p>
          <p className={classes.long}>
            끊임없이 배우고, <br />
            새로운 것에 도전하는 것을 좋아하며, <br />
            사용자의 경험을 향상시킬 수 있는 방법을 고민하는 개발자입니다.
          </p>
        </div>
      </div>
    </div>
  );
});
export default About;
