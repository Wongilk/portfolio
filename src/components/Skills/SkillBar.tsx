import { useEffect, useRef, useState } from "react";
import classes from "../Skills/SkillBar.module.css";

type Props = {
  img: string;
  percentage?: string;
};

const SkillBar = ({ img, percentage = "70%" }: Props) => {
  const target = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) {
        setIsVisible(false);
        return;
      }
      setIsVisible(true);
    });
    if (target.current) {
      observer.observe(target.current);
    }
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.img_box}>
        <img src={img} alt="teck img" />
      </div>

      <div className={classes.bar_container} ref={target}>
        <div className={classes.full_bar}>
          <div
            className={isVisible ? classes.bar : ""}
            style={{ width: percentage }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
