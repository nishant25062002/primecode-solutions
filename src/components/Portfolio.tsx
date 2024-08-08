import Button from "./global/Button";
import TextTemplate from "./global/text-template1";

const Portfolio = () => {
  const data = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661427053933-d3da1618d8c4?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Portfolio Benefit My Career",
      para: "Corporate restructuring refers to the process of reorCorporate restructuring refers to the process of reorganizing a man ompanyganizing a man company",
    },
    {
      img: "https://images.unsplash.com/photo-1599840448769-f4ac7aac8d8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Branding and Identity Mastery",
      para: "Corporate restructuring refers to the process of reorCorporate restructuring refers to the process of reorganizing a man ompanyganizing a man company",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661427053933-d3da1618d8c4?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Unveiling the power of portfolios",
      para: "Corporate restructuring refers to the process of reorCorporate restructuring refers to the process of reorganizing a man ompanyganizing a man company",
    },
  ];
  return (
    <div className="bg-[#1c3f39] text-center pt-8">
      <div className="text-white md:px-24 md:flex md:justify-between md:items-end">
        <div className="max-w-[90%] w-[615px] mx-auto md:ml-0 md:mr-0">
          <span className="text-[#f1f45d] block text-md font-rajdhani font-bold tracking-widest leading-7">
            Latest Project
          </span>

          <span
            className={
              "text-[white] text-3xl font-bold font-rajdhani leading-10 md:text-6xl"
            }
          >
            Showcase your talent with our Latest Portfolio
          </span>
        </div>
        <div className="flex justify-center items-center mt-4">
          <Button text={"SEE MORE"} color={"#f1f45d"} />
        </div>
      </div>
      {data.length > 0 &&
        data.map((val, i) => (
          <div className="mx-10 text-[#fff] py-16 border-b-2 border-[#e3e3e333] md:flex md:justify-center md:items-center md:gap-10">
            <div>
              <img
                src={val.img}
                className="max-w-[384px] max-h-56 rounded-[5px] mx-auto"
              ></img>
            </div>
            <div className="mt-5 md:flex md:justify-center md:items-center gap-2">
              <div className="w-[71px] h-[71px] rounded-[50%] border-2 border-solid border-[#ffffff1a] flex justify-center items-center mx-auto">
                <span className="text-2xl font-rubik font-bold">
                  {"0" + (i + 1)}
                </span>
              </div>
              <p className="font-rajdhani text-2xl font-bold mt-3">
                {val.title}
              </p>
            </div>
            <div>
              <p className="text-base leading-7 font-rubik mt-3 max-w-[384px] mx-auto">
                {val.para}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Portfolio;
