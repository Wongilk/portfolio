import classes from "./WorkDetail.module.css";

type Props = {
  title: string;
  onClose: () => void;
};

const WorkDetail = ({ title, onClose }: Props) => {
  return (
    <div className={classes.wrapper}>
      {title}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default WorkDetail;
