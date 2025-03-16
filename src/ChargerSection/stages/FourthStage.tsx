import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { setStage } from "../../features/chargerStageSlice";
interface Props {
  id: number;
}
function FourthStage(props: Props) {
  const { id } = props;
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="w-[400px]">
        <input
          type="text"
          maxLength={6}
          className="bg-indigo-100 p-5 rounded mb-5 block w-full"
          placeholder="Enter OTP"
        />
        <button
          className="bg-lime-500 p-5 rounded w-full"
          onClick={() => dispatch(setStage({ id, stage: 5 }))}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default FourthStage;
