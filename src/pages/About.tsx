import { forwardRef } from "react";
import classes from "./About.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { IoCalendar } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { SiGooglescholar } from "react-icons/si";
import Item from "../components/About/Item";
const Items = [
  {
    icon: <IoPersonSharp size={40} />,
    title: "이름",
    content: "김원길",
  },
  {
    icon: <IoCalendar size={40} />,
    title: "생년월일",
    content: "1999.02.04",
  },
  {
    icon: <MdEmail size={40} />,
    title: "이메일",
    content: "wwwkim99@naver.com",
  },
  {
    icon: <IoHomeSharp size={40} />,
    title: "거주지",
    content: "경기도 화성시",
  },
  {
    icon: <SiGooglescholar size={40} />,
    title: "학력",
    content: "단국대학교 (소프트웨어학과)",
  },
];

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={classes.container} ref={ref}>
      <div>
        <p className={classes.p}>About Me</p>
        <hr className={classes.hr} />
      </div>

      <div className={classes.body}>
        {Items.map((item) => (
          <Item title={item.title} content={item.content} icon={item.icon} />
        ))}
      </div>
    </div>
  );
});
export default About;
