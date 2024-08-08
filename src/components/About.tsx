import { useRef } from "react";
import Button from "./global/Button";
import TextTemplate from "./global/text-template1";
import { motion } from "framer-motion";

const About = () => {
  const image1Url =
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const ref = useRef(null);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="p-4 text-center pt-20 pb-20 md:flex md:justify-center md:items-center"
      >
        <div className="relative bg-white">
          <img
            src={image1Url}
            alt="Beautiful Nature"
            className="w-full h-[480px]"
            style={{ borderRadius: "114.5px 114.5px 0 0" }}
          />
          <div className="bg-[#f1f45d] rounded-full  h-[180px] w-[180px] absolute -bottom-8 left-6 ">
            <div className="border border-dotted border-[#1c3f39] rounded-full h-[150px] w-[150px] absolute top-4 left-4 ">
              <div className="absolute flex-col top-8 left-6">
                <h3 className=" text-center text-4xl font-rajdhani font-bold">
                  15
                </h3>
                <span className="font-rajdhani font-bold text-sm text-[#1c3f39]">
                  Years of Experience
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 md:text-left">
          <TextTemplate
            heading={"About"}
            subheading={"Elevate your brand with a stunning stunning portfolio"}
            highlight={2}
          />
          <p className="mt-2 mb-4 text-[#2a2c30] text-base leading-6 font-rubik max-w-[540px] mx-auto md:text-left md:mr-0 md:ml-12">
            In embracing frontier science, our objective is to contribute to
            advancements that directly benefit humanity, aligning our talents
            with a purpose-driven of commitment to create tangible, positive
            outcomes.
          </p>
          <div className="flex justify-center text-center md:mr-0 md:ml-10 md:text-left md:block">
            <Button text={"VIEW MORE"} color={"#f1f45d"} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
