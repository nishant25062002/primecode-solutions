const ProgressBar = ({ percentage, color }) => {
  console.log(percentage, color);
  return <div className={`h-6 w-[${percentage}%] bg-[${color}]`}></div>;
};

export default ProgressBar;
