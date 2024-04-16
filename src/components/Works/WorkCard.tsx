import Modal from "../../utils/Modal";
import Tag from "./Tag";
import classes from "./WorkCard.module.css";
import { useState } from "react";
import WorkDetail from "./WorkDetail";

type Props = {
  backgroundImg: string;
  title: string;
  tags: string[];
};

const WorkCard = ({ backgroundImg, title, tags }: Props) => {
  // const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  // const mouseEnterHandler = () => {
  //   setIsMouseEnter(true);
  // };

  // const mouseLeaveHandler = () => {
  //   setIsMouseEnter(false);
  // };

  const viewDetailHandler = () => {
    setShowDetail(true);
  };
  const closeDetailHandler = () => {
    setShowDetail(false);
  };

  return (
    <div
      className={classes.wrapper}
      // onMouseEnter={mouseEnterHandler}
      // onMouseLeave={mouseLeaveHandler}
    >
      <div className={classes.left}>
        <p>{title}</p>
        <img
          src={backgroundImg}
          alt="project img"
          // className={isMouseEnter ? classes.hoverImage : classes.image}
          className={classes.image}
        />

        <div className={classes.bottom}>
          {tags.map((tag, index) => (
            <Tag title={tag} key={index} />
          ))}
        </div>
      </div>

      <div className={classes.right}></div>

      {/* {isMouseEnter && (
        <button className={classes.button} onClick={viewDetailHandler}>
          View Details
        </button>
      )} */}

      {showDetail && (
        <Modal onClose={closeDetailHandler}>
          <WorkDetail title={title} onClose={closeDetailHandler} />
        </Modal>
      )}
    </div>
  );
};

export default WorkCard;
