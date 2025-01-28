import { useState, useEffect } from "react";
import throttle from "lodash.throttle";
//
export default function useWindowSize() {
  const [deviceType, setDeviceType] = useState("desktop");

  const handleResize = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      setDeviceType("mobile");
    } else if (window.matchMedia("(max-width: 1199px)").matches) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }
  };

  const throttledResize = throttle(handleResize, 2000);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", throttledResize);
    console.log("리사이즈 이벤트 등록");
    return () => {
      window.removeEventListener("resize", throttledResize);
      console.log("리사이즈 이벤트 삭제");
    };
  }, []);
  return deviceType;
}
