import Image from "next/image";
import {team} from "../../data/team"

const Team = () => {
  return (
    <section className="max-w-[1296px] mx-auto my-[70px] md:mt-[102px] md:mb-[102px] px-3 2xl:px-0" id="team">
      <div className="color-black text-center flex flex-col items-center">
        <h2 className="heading-2 mb-2">Our Team</h2>
        <p className="pg-default mb-10 md:mb-14 max-w-[746px]">
          Duis non mi velit. Sed ultricies ultrices dapibus. Sed ut dui diam.
          Aliquam aliquam fringilla mi, vitae tincidunt urna accumsan sit amet.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 mx-2 2xl:mx-0 justify-center">
        {team.map((member) => (
          <div
            className="w-[310px] sm:w-[416px] bg-[#E8EFFF] rounded-[30px] relative team hover:shadow-lg duration-300"
            key={member.id}
          >
            <Image src={member.img} alt="team" className="rounded-[30px]" />
            <div className="absolute bottom-0 left-0 p-[30px] text-white">
                <h5 className="heading-5 mb-2">{member.name}</h5>
                <p className="figure-caption">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
