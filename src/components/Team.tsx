import TextTemplate from "./global/text-template1";

const Team = () => {
  const team = [
    {
      name: "Leslie Alaxander",
      designation: "Founder",
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: " Bessie Cooper",
      designation: "CEO & Founder",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: " Devis Cooper",
      designation: "SEO & Digital",
      img: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const accolades = [
    {
      title: "Winning Award",
      stats: "200+",
    },
    {
      title: "Total Projects",
      stats: "600+",
    },
    {
      title: "Happy Clients",
      stats: "120+",
    },
    {
      title: "Client Reviews",
      stats: "210+",
    },
  ];
  return (
    <div className="pb-12 pt-20">
      <div className="text-center pb-10">
        <TextTemplate
          heading={"OUR TEAM"}
          subheading={"Stand out from the crowd professionals"}
          highlight={4}
        />
      </div>
      <div className="md:flex md:justify-evenly md:items-center">
        {team.map((team) => (
          <div className="bg-[#fbf3f2] rounded-[5px] pt-0 pr-8 pl-8 pb-8 max-w-[328px] max-h-[422px] mx-auto mt-16 md:max-w-[358px] md:mr-0 md:ml-0 ">
            <img
              src={team.img}
              className="max-w-[268px] max-h-[308px] -top-12 relative mx-auto"
            />
            <div className="text-center">
              <h3 className="text-2xl text-[#1c3f39] font-bold font-rajdhani mb-3">
                {team.name}
              </h3>
              <span className="text-[#2a2c30] font-rubik text-base">
                {team.designation}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 pt-28 pb-20 text-center md:grid-cols-4">
        {accolades.map((accolades) => (
          <div className="md:border-r-gray-200 md:border-r-2">
            <p className="text-[#1c3f39] text-base font-rubik">
              {accolades.title}
            </p>
            <h3
              className="text-5xl font-bold font-rajdhani"
              style={{
                WebkitTextStroke: "1px #1c3f39",
                WebkitTextFillColor: "white",
              }}
            >
              {accolades.stats}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Team;
