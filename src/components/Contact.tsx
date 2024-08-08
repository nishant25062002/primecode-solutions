
import Button from "./global/Button";
import ParaTemplate from "./global/para-template";
import TextTemplate from "./global/text-template1";

const Contact = () => {
  const servicesList = [
    {
      title: "Address",
      para: "Dhaka 102, utl 1216, road 45 house of street",
    },
    {
      title: "E-Mail",
      para: "random@gmail.com",
    },
    {
      title: "Call Us",
      para: "+91-9999111122",
    },
  ];
  return (
    <>
      <div className="md:flex md:justify-between md:items-start items-center md:mb-12 md:mt-28 ">
        <div className="mt-16 text-center md:text-left md:pt-0 md:flex-1 ">
          <TextTemplate
            heading={"GET IN TOUCH"}
            subheading={"Elevate your brand with Us"}
            highlight={2}
          />
          <p className="mt-2 mb-4 text-[#2a2c30] text-base leading-6 font-rubik max-w-[540px] mx-auto md:text-left md:mr-0 md:ml-12">
            In embracing frontier science, our objective is to contribute to
            advancements that directly benefit humanity, aligning our talents
            with a purpose-driven of commitment to create tangible, positive
            outcomes.
          </p>
        </div>
        <div className="p-3 flex-1">
          <form>
            <div className="md:grid md:grid-cols-2 md:gap-2">
              <input
                className="border-2 border-solid border-[#ebebeb] py-2.5 rounded-[5px] pl-6 w-full my-2"
                placeholder="Your Name"
              ></input>
              <input
                className="border-2 border-solid border-[#ebebeb] py-2.5 rounded-[5px] pl-6 w-full my-2"
                placeholder="Your Email"
              ></input>
              <input
                className="border-2 border-solid border-[#ebebeb] py-2.5 rounded-[5px] pl-6 w-full my-2"
                placeholder="Phone Number"
              ></input>
              <select className="border-2 border-solid border-[#ebebeb] py-2.5 rounded-[5px] pl-6 w-full my-2">
                <option>Web Development</option>
                <option>Web Design</option>
                <option>SEO & Marketing</option>
                <option>Social Media</option>
              </select>
            </div>
            <textarea
              className="border-2 border-solid border-[#ebebeb] rounded-[5px] pl-6 w-full my-2 pt-3 h-44"
              placeholder="Your Message Here..."
            ></textarea>
            <Button text={"APPOINTMENT NOW"} color={"#f1f45d"} />
          </form>
        </div>
      </div>
      <div>
        <div>
          <div className="md:flex justify-center items-center">
            {servicesList.map((service, idx) => (
              <div
                className="px-7 py-10 m-4 mb-8 border-2 border-solid border-[#e4ebf2] w-full max-w-[90%] text-center"
                key={idx}
              >
                <div className="w-[85px] h-[85px] bg-[#1c3f39] rounded-full mb-8 text-[#f1f45d] text-center flex justify-center items-center mx-auto">
                  <p className="">icon</p>
                </div>
                <ParaTemplate
                  heading={service.title}
                  paragraph={service.para}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
