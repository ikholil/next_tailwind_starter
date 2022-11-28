import ringone from "../../public/images/expense/ring1.png";
import ringtwo from "../../public/images/expense/ring2.png";
import halfring from "../../public/images/expense/half_ring.png";
import hex from "../../public/images/expense/hex.png";
import Image from "next/image";
const Newsletter = () => {
  return (
    <section className="mx-2 2xl:mx-0">
      <div className="max-w-[1296px] mx-auto p-3 md:p-16 rounded-[30px] bg-[#F5F6FC] border border-[#B0C3F0] relative">
        <div className="flex flex-col items-center text-center mx-2 2xl:mx-0">
          <h3 className="heading-3 max-w-[328px] mb-4">
            {"Let's"} save your money today
          </h3>
          <p className="pg-default max-w-[746px] mb-7 md:mb-9 ">
            Duis non mi velit. Sed ultricies ultrices dapibus. Sed ut dui diam.
            Aliquam aliquam fringilla mi, vitae tincidunt urna accumsan sit
            amet.
          </p>
          <form className="md:w-[620px] flex p-1 rounded-[30px] border border-[#B0C3F0]">
            <input
              className="bg-transparent w-full px-3 md:px-6 focus:outline-none"
              type="email"
              placeholder="Enter your Email"
            />
            <button className="btn btn-primary flex justify-center shadow-none sheen">Subscribe</button>
          </form>
        </div>
        <Image className="absolute hidden lg:block top-11 left-16 traffic" src={halfring} alt="shape" />
        <Image className="absolute hidden lg:block top-9 right-32 hex1" src={hex} alt="shape" />
        <Image
          className="absolute hidden lg:block bottom-7 left-32 hex2"
          src={ringone}
          alt="shape"
        />
        <Image
          className="absolute hidden lg:block bottom-9 right-20 hex1"
          src={ringtwo}
          alt="shape"
        />
      </div>
    </section>
  );
};

export default Newsletter;
