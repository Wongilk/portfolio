import { useMediaQuery } from "react-responsive";

type Prop = {
  children: React.ReactNode;
};

const Mobile = ({ children }: Prop) => {
  const isMobile = useMediaQuery({
    query: "(max-width : 767px)",
  });
  return <>{isMobile && children}</>;
};

const Tablet = ({ children }: Prop) => {
  const isTablet = useMediaQuery({
    query: "(max-width : 991px)",
  });
  return <>{isTablet && children}</>;
};

const Pc = ({ children }: Prop) => {
  const isPc = useMediaQuery({
    query: "(min-width : 992px)",
  });
  return <>{isPc && children}</>;
};

const Default = ({ children }: Prop) => {
  const isNotMobile = useMediaQuery({
    query: "(min-width : 768px)",
  });
  return <>{isNotMobile && children}</>;
};

export { Mobile, Tablet, Pc, Default };
