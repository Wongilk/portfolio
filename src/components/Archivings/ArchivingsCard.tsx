import classes from "./ArchivingsCard.module.css";
import { motion } from "framer-motion";

type Props = {
  img: string;
  link: string;
  summary: string;
};
const ArchivingsCard = ({ img, link, summary }: Props) => {
  return (
    <motion.div className={classes.container} whileHover={{ scale: 1.05 }}>
      <img src={img} alt="github" className={classes.img} />
      <div>
        <a href={link} className={classes.link}>
          {link}
        </a>
      </div>
      <p className={classes.summary}>{summary}</p>
    </motion.div>
  );
};

export default ArchivingsCard;
