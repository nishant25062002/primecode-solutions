import { FaComputer } from "react-icons/fa6";
import ParaTemplate from "./global/para-template";
import { SlSocialYoutube } from "react-icons/sl";
import { SiVorondesign } from "react-icons/si";

const Services = () => {
  const servicesList = [
    {
      icon: <FaComputer />,
      title: "Website Development",
      para: "Purus velit aenean quis habitant eros the a bibendum aenean quis habit aeros who ath bibendumPurus velit aenean",
    },
    {
      icon: <SiVorondesign />,
      title: "UI/UX Designing",
      para: "Purus velit aenean quis habitant eros the a bibendum aenean quis habit aeros who ath bibendumPurus velit aenean",
    },
    {
      icon: <SlSocialYoutube />,
      title: "Social Media Management Pro",
      para: "Purus velit aenean quis habitant eros the a bibendum aenean quis habit aeros who ath bibendumPurus velit aenean",
    },
  ];
  return (
    <div className="md:flex justify-between items-center pb-20 mt-14">
      {servicesList.map((service, idx) => (
        <div className="bg-[#fbf3f2] px-7 py-10 m-4 mb-8" key={idx}>
          <div className="w-[85px] h-[85px] bg-[#1c3f39] rounded-full mb-8 text-[#f1f45d] text-center flex justify-center items-center">
            <p className="text-2xl">{service.icon}</p>
          </div>
          <ParaTemplate heading={service.title} paragraph={service.para} />
        </div>
      ))}
    </div>
  );
};
export default Services;
