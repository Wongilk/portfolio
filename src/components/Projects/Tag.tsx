import classes from "./Tag.module.css";

type Props = {
  title: string;
};

const Tag = ({ title }: Props) => {
  return <div className={classes.tag}>#{title}</div>;
};

export default Tag;
