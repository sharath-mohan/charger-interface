interface Props {
  name: string;
  image?: string;
}
function Vendor(props: Props) {
  return (
    <div className="flex flex-col justify-center border-1 border-indigo-400 rounded-lg p-3">
      <img src={props.image} alt="" className="h-[100px] w-[100px]" />
      <p className="text-xl text-center text-white mt-3 ">{props.name}</p>
    </div>
  );
}

export default Vendor;
