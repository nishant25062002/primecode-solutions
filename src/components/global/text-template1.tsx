const TextTemplate = ({ heading, subheading, highlight }) => {
  return (
<div className="max-w-[90%] mx-auto">
      <span className="text-[#2a2c30] block text-lg font-rajdhani font-bold tracking-widest leading-7">
        {heading}
      </span>
      {subheading.split(" ").map((el, idx) => {
        return (
          <span
            key={idx}
            className={
              highlight === idx
                ? " text-[#c1c505] text-3xl font-rajdhani font-bold md:text-6xl md:leading-tight"
                : "text-[#1c3f39] text-3xl font-bold font-rajdhani leading-10 md:text-6xl"
            }
          >
            {el + " "}
          </span>
        );
      })}
    </div>
  );
};

export default TextTemplate;
