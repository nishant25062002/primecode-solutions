import { motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const imageUrl =
    "https://toppng.com/uploads/preview/see-profile-gentlema-11563886739l6i9igwwuz.png";
  const firmStats = [
    {
      number: "200+",
      text: "Team Members",
    },
    {
      number: "20+",
      text: "Awards Recieved",
    },
  ];
  const ref = useRef(null);
  // const isInview = useInView(ref,{once: true})
  return (
    <div ref={ref} className="bg-[#1C3F39] min-h-screen">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="md:flex md:justify-center md:items-center md:pt-16  pb-24 px-16"
      >
        <div className="main-hero text-center md:mx-auto md:text-left">
          <h2 className="text-[#f1f45d] font-rajdhani font-semibold text-5xl">
            I'M
          </h2>
          <h2 className="text-white text-5xl font-rajdhani font-bold mt-3 md:text-8xl">
            Vasu Kapil
          </h2>
          <p className="text-white text-sm leading-7 max-w-sm mx-auto font-rubik font-normal md:tracking-widest md:mx-0 md:text-base">
            Dedicated to assisting you in reaching your digital objectives, our
            team of experts specializes in services ranging from website design
            and development to SEO, PPC advertising.
          </p>
          <div className="stats flex justify-evenly text-white font-rajdhani my-4 max-w-sm mx-auto md:flex md:justify-start md:gap-6 md:ml-0">
            {firmStats?.length &&
              firmStats?.map((stats) => (
                <div>
                  <h3 className="font-bold text-4xl">{stats.number}</h3>
                  <p className="font-semibold">{stats.text}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-center items-center pb-6 pt-6 mx-auto relative">
          <div className="w-[500px] h-[582px] relative ">
            {/* <div
              className="relative w-0 h-0"
              style={{
                borderTop: "240px solid transparent",
                borderLeft: "280px solid #f1f45d",
                borderBottom: "240px solid transparent",
              }}
            ></div>
            <img
              src={imageUrl}
              alt="Beautiful Nature"
              className="shadow-lg max-w-[250px] max-h-[214px] absolute top-1/2 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2"
            /> */}
          </div>

          <div>
            <ul
              className="md:text-7xl md:font-bold md:text-white md:leading-[115%] md:max-w-[314px] hidden md:block
            "
            >
              <li className="hover:text-[yellow] md:opacity-10 hover:opacity-50">
                Graphic Designer
              </li>
              <li className="hover:text-[#f1f45d] md:opacity-10 hover:opacity-50 ">
                Marketing
              </li>
              <li className="hover:text-[#f1f45d] md:opacity-10 hover:opacity-50">
                Web Developer
              </li>
              <li className="hover:text-[#f1f45d] md:opacity-10 hover:opacity-50">
                Social Media
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Hero;
