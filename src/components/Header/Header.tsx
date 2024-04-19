import React, { useState } from "react";
import classes from "./Header.module.css";
import Tab from "./Tab";
import { Pc, Tablet } from "../../utils/MediaQuery";
import { IoIosMenu, IoIosClose } from "react-icons/io";
type Props = {
  ontabClick: (e: React.MouseEvent<HTMLLIElement>) => void;
};
const Header = ({ ontabClick }: Props) => {
  const tabList = ["Home", "About", "Skills", "Works", "Archivings"];
  const [tabClicked, setTabClicked] = useState(false);

  const PcHeader = (
    <ul className={classes.pc_ul}>
      <p style={{ marginRight: "30%" }}>WonGil's Portfolio</p>
      {tabList.map((list, index) => (
        <Tab key={list} text={list} index={index} onClick={ontabClick} />
      ))}
    </ul>
  );

  const TabletHeader = (
    <div
      className={classes.tablet_container}
      style={{
        maxHeight: tabClicked ? "14rem" : "4rem",
      }}
    >
      <div className={classes.tablet_div} style={{ marginLeft: "5%" }}>
        <p>WonGil's Portfolio</p>

        {tabClicked ? (
          <IoIosClose
            size={25}
            style={{ marginRight: "5%", cursor: "pointer" }}
            onClick={() => setTabClicked((prev) => !prev)}
          />
        ) : (
          <IoIosMenu
            size={25}
            style={{ marginRight: "5%", cursor: "pointer" }}
            onClick={() => setTabClicked((prev) => !prev)}
          />
        )}
      </div>
      <ul>
        {tabList.map((list, index) => (
          <Tab key={list} text={list} index={index} onClick={ontabClick} />
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <Pc>{PcHeader}</Pc>
      <Tablet>{TabletHeader}</Tablet>
    </>
  );
};

export default Header;
