import TextTemplate from "./global/text-template1";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const reviews = [
    {
      text: "Portfolio is a collection of works that showcases an individual's or the organization's skills, experience, and achievements. It is a powerful tool for presenting one's capabilities and impressing.",
      imgSrc:
        "https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
      name: "Robert Willson",
      job: "Software Developer",
    },
    {
      text: "Portfolio is a collection of works that showcases an individual's or the organization's skills, experience, and achievements. It is a powerful tool for presenting one's capabilities and impressing.",
      imgSrc:
        "https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
      name: "Robert Willson",
      job: "Software Developer",
    },
    {
      text: "Portfolio is a collection of works that showcases an individual's or the organization's skills, experience, and achievements. It is a powerful tool for presenting one's capabilities and impressing.",
      imgSrc:
        "https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
      name: "Robert Willson",
      job: "Software Developer",
    },
  ];

  const Review = ({ text, imgSrc, name, job }) => (
    <div className="max-w-[351px] max-h-[424px] bg-[#f1f45d] mx-auto mt-8 mb-4">
      <p className="text-base text-[#2a2c30] font-normal max-w-[288px] font-rubik mx-auto pt-4 text-left">
        {text}
      </p>
      <div className="flex pl-6 items-center gap-3 mt-8 pb-3">
        <img className="rounded-[50%] w-18 h-18" src={imgSrc} alt={name} />
        <div className="flex-col">
          <h3 className="text-xl font-rajdhani text-[#1c3f39] font-bold">
            {name}
          </h3>
          <span className="text-base font-rubik text-[#2a2c30] font-normal">
            {job}
          </span>
        </div>
      </div>
    </div>
  );
  return (
    <div className="pt-20 pb-15 text-center relative">
      <TextTemplate
        heading={"CLIENTS REVIEW"}
        subheading={"your talent with our latest portfolio"}
        highlight={""}
      />
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <Review
            key={index}
            text={review.text}
            imgSrc={review.imgSrc}
            name={review.name}
            job={review.job}
          />
        ))}
      </Slider>
    </div>
  );
};
export default Reviews;
