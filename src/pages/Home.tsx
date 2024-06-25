import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";

import classes from "./Home.module.css";

type Props = {
  onViewProjectsClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

type Star = {
  x: number;
  y: number;
  time: number;
  size: number;
  blur: number;
};

const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const originText = "WEB FRONTEND";
const Home = forwardRef<HTMLDivElement, Props>(
  ({ onViewProjectsClick }, ref) => {
    const stars: Star[] = useMemo(() => {
      return [];
    }, []);

    const [isMoseEnter, setIsMouseEnter] = useState(false);
    const [text, setText] = useState("CAPSLODMWKDO");
    const rotationIndex = useRef(0);

    const makeStars = useCallback(() => {
      for (let i = 0; i < 50; i++) {
        const x = Math.floor(Math.random() * window.innerWidth) - 50;
        const y = Math.floor(Math.random() * window.innerHeight) - 50;
        const time = Math.random() * (6 - 2) + 2;
        const size = Math.random() * (6 - 2) + 2;
        const blur = Math.random() * (7 - 1) + 1;
        stars.push({ x, y, time, size, blur });
      }
    }, [stars]);

    useEffect(() => {
      const intervalId = setInterval(() => {
        const changedText = originText
          .split("")
          .map((_, index) => {
            if (index <= rotationIndex.current) {
              return originText[index];
            } else {
              return alphabets[Math.floor(Math.random() * 25)];
            }
          })
          .join("");
        setText(changedText);
        rotationIndex.current += 0.1;
      }, 50);

      makeStars();

      return () => clearInterval(intervalId);
    }, [makeStars]);

    const renderStars = useCallback(() => {
      return stars.map((star, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            top: star.y,
            left: star.x,
            width: star.size,
            height: star.size,
            filter: `blur(${star.blur}px)`,
            animationDuration: `${star.time}s`,
          }}
          className={classes.star}
        />
      ));
    }, [stars]);

    const onMouseEnter = useCallback(() => {
      setIsMouseEnter(true);
    }, []);

    const onMouseLeave = useCallback(() => {
      setIsMouseEnter(false);
    }, []);

    return (
      <>
        <div className={classes.container} ref={ref}>
          {renderStars()}
          <div>
            <p className={classes.intro}>
              <span>I'm Won Gil</span>
              <br />
              <span
                style={{ color: "var(--blue500)" }}
                className={classes.text}
              >
                {text}
              </span>
              <br />
              <span>Developer</span>
            </p>
            <motion.div
              className={classes.box}
              onClick={onViewProjectsClick}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              whileHover={{ backgroundColor: "var(--blue300)" }}
            >
              Check out My Projects
              <motion.span
                className={classes.arrow}
                animate={{
                  rotate: isMoseEnter ? 90 : 0,
                }}
              >
                &#5125;
              </motion.span>
            </motion.div>
          </div>
        </div>
      </>
    );
  }
);

export default Home;
