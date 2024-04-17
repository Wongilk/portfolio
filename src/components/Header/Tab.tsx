import React from "react";
import { motion } from "framer-motion";
import classes from "./Tab.module.css";
import { useMediaQuery } from "react-responsive";

type Props = {
  text: string;
  index: number;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const Tab = ({ text, onClick, index }: Props) => {
  const isPc = useMediaQuery({
    query: "(min-width : 992px)",
  });

  return (
    <>
      <motion.li
        className={isPc ? classes.pc_li : classes.mobile_li}
        onClick={onClick}
        data-index={index}
        whileHover={{ scale: 1.15 }}
      >
        {text}
      </motion.li>
    </>
  );
};

export default Tab;
