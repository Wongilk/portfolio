import { useMediaQuery } from "react-responsive";

type Props = {
  children: React.ReactNode;
};

const Mobile = ({ children }: Props) => {
  const isMobile = useMediaQuery({
    query: "(max-width : 767px)",
  });
  return <>{isMobile && children}</>;
};

const Tablet = ({ children }: Props) => {
  const isTablet = useMediaQuery({
    query: "(max-width : 991px)",
  });
  return <>{isTablet && children}</>;
};

const Pc = ({ children }: Props) => {
  const isPc = useMediaQuery({
    query: "(min-width : 992px)",
  });
  return <>{isPc && children}</>;
};

const Default = ({ children }: Props) => {
  const isNotMobile = useMediaQuery({
    query: "(min-width : 768px)",
  });
  return <>{isNotMobile && children}</>;
};

export { Mobile, Tablet, Pc, Default };
