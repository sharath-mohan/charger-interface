import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setActiveCharger } from "../features/chargerSlice";
import FirstStage from "./stages/FirstStage";
import SecondStage from "./stages/SecondStage";
import ThirdStage from "./stages/ThirdStage";
import FourthStage from "./stages/FourthStage";
import FifthStage from "./stages/FifthStage";
import SixthStage from "./stages/SixthStage";
import SeventhStage from "./stages/SeventhStage";
import EightStage from "./stages/EightStage";
interface Props {
  id: number;
}
function ChargerSection(props: Props) {
  const { id } = props;
  const { activeCharger } = useAppSelector((state) => state.charger);
  const { chargers } = useAppSelector((state) => state.stage);
  const stage = chargers.find((charger) => charger.id === id)?.activeStage;
  const dispatch = useAppDispatch();
  const setCharger = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(setActiveCharger(id));
  };
  const active = Number(stage) > 1 && activeCharger !== id;
  return (
    <div
      onClick={setCharger}
      className={`${
        activeCharger === id ? "w-3/4" : "w-1/4"
      } bg-purple-300 rounded-md flex justify-center items-center bg-linear-to-b from-indigo-700 to-gray-800`}
    >
      {stage === 1 && <FirstStage id={id} isCollapsed={activeCharger !== id} />}

      <div className={`${active ? "" : "hidden"}`}>
        <p className="text-white text-8xl mb-5">{id}</p>
        <p className="text-white text-2xl">
          {Number(stage) < 6 ? "Preparing" : null}
          {stage === 7 ? "Charging" : null}
          {stage === 8 ? "Finished" : null}
        </p>
      </div>

      <div className={`${!active ? "" : "hidden"}`}>
        {stage === 2 && <SecondStage id={id} />}
        {stage === 3 && <ThirdStage id={id} />}
        {stage === 4 && <FourthStage id={id} />}
        {stage === 5 && <FifthStage id={id} />}
        {stage === 6 && <SixthStage id={id} />}
        {stage === 7 && <SeventhStage id={id} />}
        {stage === 8 && <EightStage id={id} />}
      </div>
    </div>
  );
}

export default ChargerSection;
