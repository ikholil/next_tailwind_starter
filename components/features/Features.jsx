import Link from "next/link";
import { features } from "../../data/features";

const Features = () => {
  return (
    <section className="max-w-[1296px] mx-auto flex flex-col xl:flex-row justify-between items-center my-[70px] md:mt-[105px] xl:mt-[120px] md:mb-[160px]" id="features">
      <div className="w-full xl:w-5/12 color-black px-3 2xl:px-0 mb-10">
        <h2 className="heading-2 mb-2">Our core features</h2>
        <p className="pg-default mb-6 md:mb-8 max-w-[530px]">
          In eget dui varius neque malesuada fermentum in non purus. Praesent
          viverra consectetur eros a luctus.
        </p>
        <div className="flex gap-3 items-start">
          <Link className="btn btn-primary self-start sheen" href="#">
            Get Started
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-9/12 2xl:w-6/12  flex flex-wrap gap-5 justify-center px-3 2xl:px-0 mt-5 2xl:mt-0">
        {features.map(({ id, title, desc, icon }) => (
          <div
            key={id}
            className={`w-[306px] p-5 md:p-[30px] rounded-[20px] border border-[#B0C3F0] hover:shadow-xl duration-300 ${
              id == 2 && "relative md:top-10"
            } ${id == 4 && "relative md:top-10"}`}
          >
            <i className={`${icon} gradient-text`}></i>
            <h5 className="heading-5 mt-1 mb-4">{title}</h5>
            <p className="pg-default">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
