import { useMediaQuery } from "react-responsive";

type Props = {
  children: React.ReactNode;
};

const useIsMobile = () => {
  const isMobile = useMediaQuery({
    query: "(max-width : 767px)",
  });
  return isMobile;
};

const useIsTablet = () => {
  const isTablet = useMediaQuery({
    query: "(max-width : 1279px)",
  });
  return isTablet;
};

const useIsPc = () => {
  const isPc = useMediaQuery({
    query: "(min-width : 1280px)",
  });
  return isPc;
};

const Mobile = ({ children }: Props) => {
  return <>{useIsMobile() && children}</>;
};

const Tablet = ({ children }: Props) => {
  return <>{useIsTablet() && children}</>;
};

const Pc = ({ children }: Props) => {
  return <>{useIsPc() && children}</>;
};

export { Mobile, Tablet, Pc, useIsMobile, useIsPc, useIsTablet };
