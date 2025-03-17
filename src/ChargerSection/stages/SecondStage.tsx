import { useAppDispatch } from "../../app/hooks";
import { setOption } from "../../features/chargeOptionSlice";
import { setStage } from "../../features/chargerStageSlice";
import { PARTNERS } from "../../constants/partners";
import Vendor from "../../components/Vendor";
interface Props {
  id: number;
}
function SecondStage(props: Props) {
  const { id } = props;
  const dispatch = useAppDispatch();
  const setChargerStage = (option: string) => {
    dispatch(setOption({ id, option }));
    dispatch(setStage({ id, stage: 3 }));
  };
  const setWhatsappStage = (option: string) => {
    dispatch(setOption({ id, option }));
    dispatch(setStage({ id, stage: 3 }));
  };
  return (
    <div>
      <div className="flex gap-10">
        <div className="grid grid-cols-2 gap-5">
          {PARTNERS.map((partner) => (
            <div key={partner.id} onClick={() => setChargerStage(partner.name)}>
              <Vendor name={partner.name} image={partner.image} />
            </div>
          ))}
        </div>

        <div onClick={() => setWhatsappStage("whatsapp")}>
          <Vendor name={"Whatsapp"} image="WhatsApp.svg" />
        </div>
      </div>

      <p className="mt-10 text-3xl text-white text-center">
        Choose one to start
      </p>
    </div>
  );
}

export default SecondStage;
