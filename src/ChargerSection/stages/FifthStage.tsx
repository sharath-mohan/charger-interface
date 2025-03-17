import { useAppDispatch } from "../../app/hooks";
import { setStage } from "../../features/chargerStageSlice";
interface Props {
  id: number;
}
function FifthStage(props: Props) {
  const { id } = props;
  const dispatch = useAppDispatch();
  return (
    <div className="w-[400px]">
      <input
        type="text"
        maxLength={10}
        className="bg-indigo-100 p-5 rounded mb-5 block w-full"
        placeholder="Enter Amount"
      />
      <button
        className="bg-lime-500 p-5 rounded w-full"
        onClick={() => dispatch(setStage({ id, stage: 6 }))}
      >
        Start Charging
      </button>
    </div>
  );
}

export default FifthStage;
