import { useAppDispatch } from "../../app/hooks";
import { setStage } from "../../features/chargerStageSlice";
interface Props {
  id: number;
  isCollapsed: boolean;
}
function FirstStage(props: Props) {
  const { id, isCollapsed } = props;
  const dispatch = useAppDispatch();
  const setChargerStage = () => {
    dispatch(
      setStage({
        id,
        stage: 2,
      })
    );
  };
  return (
    <div className=" flex flex-col text-white">
      <div className="flex gap-10">
        <div>
          <h2 className="text-8xl">{id}</h2>
        </div>
        {!isCollapsed && (
          <button onClick={setChargerStage}>
            <img src="gun.jpg" alt="" className="h-[300px] rounded-lg" />
          </button>
        )}
      </div>
      {!isCollapsed ? (
        <p className="text-2xl text-center mt-10">Connect your vehicle</p>
      ) : (
        <p className="text-2xl text-center mt-10">Available</p>
      )}
    </div>
  );
}

export default FirstStage;
