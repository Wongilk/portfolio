import { forwardRef } from "react";
import classes from "./Archivings.module.css";

const Archivings = forwardRef<HTMLDivElement>((props, ref) => {
  return <div className={classes.wrapper} ref={ref}></div>;
});
export default Archivings;
