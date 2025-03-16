import { Info, TriangleAlert, Wifi } from "lucide-react";
import React, { useEffect } from "react";

function Header() {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex justify-between px-10 pt-5 text-white items-center">
      <img src="logo.png" alt="" className="h-[30px] " />
      <div>
        <p className="text-sm text-center">
          {currentDate.toLocaleDateString() +
            " " +
            currentDate.toLocaleTimeString()}
        </p>
        <p className="text-sm bg-lime-500 text-black rounded-full text-center mt-3">
          {" "}
          ME 12345
        </p>
      </div>
      <div className="flex gap-5 items-center">
        <TriangleAlert size={30} />
        <Wifi size={30} />
        <Info size={30} />
      </div>
    </div>
  );
}

export default Header;
