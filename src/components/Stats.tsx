interface Props {
  param: string;
  value: string;
}
function Stats(props: Props) {
  return (
    <div>
      <p className="text-white text-md pb-3">{props.param}</p>
      <p className="text-white text-3xl font-bold">{props.value}</p>
    </div>
  );
}

export default Stats;
