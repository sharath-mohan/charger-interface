import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { setStage } from "../../features/chargerStageSlice";
interface Props {
  id: number;
}
function EightStage(props: Props) {
  const { id } = props;
  const dispatch = useAppDispatch();
  return (
    <div className="w-[400px]">
      <div className="flex gap-10">
        <h2 className="text-8xl text-white">{id}</h2>
      </div>
      <p className="text-2xl text-white mt-3 mb-10">Charging Completed</p>
      <button
        className="bg-lime-500 p-5 rounded w-full"
        onClick={() => dispatch(setStage({ id, stage: 1 }))}
      >
        Close
      </button>
    </div>
  );
}

export default EightStage;
