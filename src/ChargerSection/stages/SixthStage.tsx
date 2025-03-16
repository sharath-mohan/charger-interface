import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setStage } from "../../features/chargerStageSlice";
interface Props {
  id: number;
}
const EXPIRY = 30;
function SixthStage(props: Props) {
  const { id } = props;
  const [timer, setTimer] = useState(EXPIRY);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setStage({ id, stage: 1 }));
    }, EXPIRY * 1000);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch, id]);
  return (
    <div className="w-[500px]">
      <p className="text-3xl text-center mb-10 text-white">
        Kindly complete your payment with your whatsapp to start charging
      </p>

      <button
        className="bg-white p-5 rounded w-full"
        onClick={() => dispatch(setStage({ id, stage: 7 }))}
      >
        Session expiring in {timer} s
      </button>
    </div>
  );
}

export default SixthStage;
