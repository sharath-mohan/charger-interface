import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setStage } from "../../features/chargerStageSlice";
import Vendor from "../../components/Vendor";
import { PARTNERS } from "../../constants/partners";
interface Props {
  id: number;
}
function ThirdStage(props: Props) {
  const { id } = props;
  const dispatch = useAppDispatch();
  const { chargers } = useAppSelector((state) => state.options);
  const charger = chargers.find((charger) => charger.id === id);
  const option = PARTNERS.find((partner) => partner.name === charger?.option);
  return (
    <div>
      <div className="w-[400px]">
        {charger?.option === "whatsapp" ? (
          <>
            <input
              type="text"
              maxLength={10}
              className="bg-indigo-100 p-5 rounded mb-5 block w-full"
              placeholder="Enter Mobile Number"
            />
            <button
              className="bg-lime-500 p-5 rounded w-full"
              onClick={() => dispatch(setStage({ id, stage: 4 }))}
            >
              Send OTP
            </button>
          </>
        ) : null}
        {option && (
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => dispatch(setStage({ id, stage: 7 }))}
          >
            <div className="flex items-center gap-10">
              <Vendor name={option.name} image={option.image} />
              <img src="qr.png" alt="" className="h-[150px] w-[150px]" />
            </div>
            <p className="mt-10 text-white text-2xl text-center">
              Scan the QR code or tap RFID to start
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ThirdStage;
