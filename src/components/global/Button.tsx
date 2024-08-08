import { FaArrowRight } from "react-icons/fa";

const Button = ({ text, color }) => {
  return (
   
      <button
        className={`bg-[${color}] text-center text-[#1c3f39] font-rajdhani font-bold text-base py-2 pr-8 pl-4 rounded-[5px] flex justify-center items-center gap-2 `}
      >
        {text}{<FaArrowRight />}
      </button>
   
  );
};
export default Button;
