import { FaCheck } from "react-icons/fa6";
import classes from "./Tag.module.css";

type Props = {
  label: string;
  value: string;
};

function checkUrl(strUrl: string) {
  let expUrl = /^http[s]?:\/\/([\S]{3,})/i;
  return expUrl.test(strUrl);
}

const Tag = ({ label, value }: Props) => {
  let initValue = <p> {value}</p>;
  if (checkUrl(value)) initValue = <a href={value}>{value}</a>;
  return (
    <div className={classes.container}>
      <div className={classes.label}>
        <FaCheck />
        <p>{label}</p>
      </div>
      {initValue}
    </div>
  );
};

export default Tag;
