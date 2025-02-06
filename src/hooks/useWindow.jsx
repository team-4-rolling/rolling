import { useState, useEffect } from "react";
import throttle from "lodash.throttle";
//
export default function useWindowSize() {
  const [deviceType, setDeviceType] = useState("desktop");

  const handleResize = () => {
    if (window.matchMedia("(max-width: 481px)").matches) {
      setDeviceType("mobile");
    } else if (window.matchMedia("(max-width: 768px)").matches) {
      setDeviceType("tablet");
    } else if (window.matchMedia("(max-width: 1280px)").matches) {
      setDeviceType("laptop");
    } else {
      setDeviceType("desktop");
    }
  };

  const throttledResize = throttle(handleResize, 2000);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", throttledResize);
    return () => {
      window.removeEventListener("resize", throttledResize);
    };
  }, []);
  return deviceType;
}
