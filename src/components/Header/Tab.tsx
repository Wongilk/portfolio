import React from "react";
import { motion } from "framer-motion";
import classes from "./Tab.module.css";
import { useIsMobile } from "../../utils/MediaQuery";

type Props = {
  text: string;
  index: number;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const Tab = ({ text, onClick, index }: Props) => {
  return (
    <>
      <motion.li
        className={useIsMobile() ? classes.mobile_li : classes.pc_li}
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
