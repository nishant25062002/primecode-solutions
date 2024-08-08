const ParaTemplate = ({ heading, paragraph }) => {
  return (
    <>
      <span
        className={"text-[#1c3f39] text-2xl font-bold font-rajdhani leading-10"}
      >
        {heading}
      </span>
      <p className="mt-2 text-[#2a2c30] text-base leading-6 font-rubik">
        {paragraph}
      </p>
    </>
  );
};

export default ParaTemplate;
