import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setStage } from "../../features/chargerStageSlice";
import Stats from "../../components/Stats";
interface Props {
  id: number;
}
function SeventhStage(props: Props) {
  const [battery, setBattery] = useState(10);
  const [mins, setMins] = useState(120);
  const [energy, setEnergy] = useState(0);
  const [timer, setTimer] = useState("00:00:00");
  const { id } = props;

  const dispatch = useAppDispatch();
  useEffect(() => {
    const startTime = new Date().getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const elapsedTime = now - startTime;

      const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
      const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
      const seconds = Math.floor((elapsedTime / 1000) % 60);
      setTimer(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );

      setMins((min) => (min - 2 < 0 ? 0 : min - 2));
      setEnergy((energy) => energy + 2);
      setBattery((bat) => bat + 2);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (battery === 100) {
      dispatch(setStage({ id, stage: 8 }));
    }
  });
  return (
    <div>
      <div className="flex gap-1 items-center flex-col ">
        <img src="battery.png" alt="" className="h-[300px] rounded-lg" />
        <div className="flex gap-10">
          <Stats param="Battery" value={`${battery}%`} />
          <Stats param="Power Delivery" value={`${energy} kWh`} />
          <Stats param="Time to full Charge" value={`${mins} mins`} />
          <Stats param="Energy Consumed" value="3.5 kWh" />
          <Stats param="Time Elapsed" value={timer} />
        </div>
      </div>

      <button
        className="bg-lime-500 p-5 rounded w-full mt-5"
        onClick={() => dispatch(setStage({ id, stage: 1 }))}
      >
        Press to stop
      </button>
    </div>
  );
}

export default SeventhStage;
