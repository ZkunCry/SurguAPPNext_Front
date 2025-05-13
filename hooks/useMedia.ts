import { useMediaQuery } from "react-responsive";

const breakPoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

export const useBreakpoint = (key) => {
  const isCurrentBreakPoint = useMediaQuery({
    query: `(min-width: ${breakPoints[key]})`,
  });

  let capitalizedKey = key[0].toUpperCase() + key.substring(1);

  return {
    [`is${capitalizedKey}`]: isCurrentBreakPoint,
  };
};
