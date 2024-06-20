import React, { ReactElement } from "react";
import classes from "./Item.module.css";

type Props = {
  title: string;
  content: string;
  icon: ReactElement;
};

const Item = ({ title, content, icon }: Props) => {
  return (
    <div className={classes.container}>
      {icon}
      <div>
        <p className={classes.title}>{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Item;
