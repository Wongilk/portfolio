import React, { forwardRef, useState } from "react";
import { motion } from "framer-motion";

import classes from "./Home.module.css";

type Props = {
  onViewWorkClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};
type Star = {
  x: number;
  y: number;
  time: number;
  size: number;
  blur: number;
};

const Home = forwardRef<HTMLDivElement, Props>(({ onViewWorkClick }, ref) => {
  const stars: Star[] = [];

  const [isMoseEnter, setIsMouseEnter] = useState(false);

  const makeStars = () => {
    for (let i = 0; i < 15; i++) {
      const x = Math.floor(Math.random() * window.innerWidth) - 50;
      const y = Math.floor(Math.random() * window.innerHeight) - 50;
      const time = Math.random() * (6 - 2) + 2;
      const size = Math.random() * (6 - 2) + 2;
      const blur = Math.random() * (7 - 1) + 1;
      stars.push({ x, y, time, size, blur });
    }
  };

  makeStars();

  const renderStars = () => {
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
  };

  const onMouseEnter = () => {
    setIsMouseEnter(true);
  };
  const onMouseLeave = () => {
    setIsMouseEnter(false);
  };

  return (
    <>
      <div className={classes.container} ref={ref}>
        {renderStars()}
        <div>
          <p className={classes.intro}>
            Hello. I'm Kim Won Gil <br />
            I'm web frontend developer
          </p>
          <motion.div
            className={classes.box}
            onClick={onViewWorkClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            whileHover={{ backgroundColor: "#333333" }}
          >
            Check out My works
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
});

export default Home;
