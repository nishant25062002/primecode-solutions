import { BiBookmarkAltMinus } from "react-icons/bi";
import ParaTemplate from "./global/para-template";
import TextTemplate from "./global/text-template1";
import { GiBrain } from "react-icons/gi";
import { MdComputer } from "react-icons/md";

const Benefits = () => {
  const benefits = [
    {
      icon: <BiBookmarkAltMinus />,
      title: "UI/UX Design",
      para: "Portfolio is a collection of works that showcases an individual's",
    },
    {
      icon: <GiBrain />,
      title: "E-commerce Solutions",
      para: "Portfolio is a collection of works that showcases an individual's",
    },
    {
      icon: <MdComputer />,
      title: "SEO and Digital Advertising",
      para: "Portfolio is a collection of works that showcases an individual's",
    },
  ];
  return (
    <div className="mx-auto items-center mb-7 pb-12">
      <div className="text-center">
        <TextTemplate
          heading={"OUR BENEFITS"}
          subheading={"Where creativity meets success through the portfolios "}
          highlight={2}
        />
      </div>
      <div className="md:flex justify-between items-center">
        {benefits.length > 0 &&
          benefits.map((value) => (
            <>
              <div className="border-2 border-#e3e3e3 px-7 py-10 rounded m-2 mt-10 mb-10 text-center">
                <div className="w-[85px] h-[85px] flex justify-center items-center text-2xl bg-[#f1f45d] rounded-full mb-8 text-[#1c3f39] mx-auto">{value.icon}</div>
                <ParaTemplate heading={value.title} paragraph={value.para} />
              </div>
            </>
          ))}
      </div>
    </div>
  );
};
export default Benefits;
