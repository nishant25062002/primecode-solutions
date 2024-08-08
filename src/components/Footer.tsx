import {
  FaAngleRight,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiGithub, FiTwitter, FiLinkedin, FiYoutube } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF />,
      url: "https://www.stoman.me/",
    },
    {
      id: 2,
      icon: <FaGithub />,
      url: "https://github.com/",
    },
    {
      id: 3,
      icon: <TiSocialTwitter />,
      url: "https://twitter.com/",
    },
    {
      id: 4,
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/",
    },
  ];
  return (
    <div className="bg-[#fbf3f2]">
      <div className="border-b-2 border-gray-400 md:flex md:justify-evenly md:items-start md:pt-20 md:pb-20">
        <div className="mt-15 p-8">
          <span className="">Logo</span>
          <p className="mt-4 mb-4">
            Lorem Ipsum is simply is dumiomy is text Lorem Ipsum is simply
          </p>
          <div className="mb-2">
            <ul className="flex gap-4 sm:gap-8">
              {socialLinks.map((link) => (
                <a
                  href={link.url}
                  target="__blank"
                  key={link.id}
                  className="text-#1c3f39 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-full bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
                >
                  <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
                </a>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-[#1c3f39] text-2xl font-bold font-rajdhani pl-8">
            Our Services
          </h2>
          <div className="text-base text-[#5c5c5c] font-rubik flex-col p-8">
            <div className="flex items-center gap-2">
              <span>
                <FaAngleRight />{" "}
              </span>
              <p>Home</p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <FaAngleRight />{" "}
              </span>
              <p>Services</p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <FaAngleRight />{" "}
              </span>
              <p>Portfolio</p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <FaAngleRight />{" "}
              </span>
              <p>Blog</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-[#1c3f39] text-2xl font-bold font-rajdhani pl-8">
            Address
          </h2>
          <div className="text-base text-[#5c5c5c] font-rubik flex-col p-8">
            <div className="flex items-center gap-2">
              <span>
                <FaPhoneAlt />
              </span>
              <p>(629) 555-0129</p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <MdEmail />
              </span>
              <p>info@example.com</p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <RiMapPin2Fill />
              </span>
              <p>6391 Elgin St. Celina, 10299</p>
            </div>
          </div>
        </div>
        <div className="pb-8">
          <h2 className="text-[#1c3f39] text-2xl font-bold font-rajdhani pl-8">
            Get Free Estimate
          </h2>
          <input
            className="border-2 border-solid border-[#ebebeb] py-2.5 rounded-[5px] pl-6 w-full my-2 max-w-[300px] ml-8"
            placeholder="Your e-mail address"
          ></input>
        </div>
      </div>
      <div className="text-sm font-rubik py-5 text-center text-#5c5c5c md:flex md:justify-around md:items-center">
        <p>© {new Date().getFullYear()} Vasu Kapil , All Rights Reserved.</p>
        <div>
          <ul className="flex justify-center gap-2">
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
