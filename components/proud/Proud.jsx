import { proud } from "../../data/proud";

const Proud = () => {
  return (
    <section className="max-w-[1296px] mx-auto mb-[70px] mt-[60px] md:mt-[102px] md:mb-[100px] px-3 2xl:px-0 color-black"  id="about">
      <div className="text-center flex flex-col items-center">
        <h2 className="heading-2 mb-2">What We Proud Of</h2>
        <p className="pg-default mb-10 md:mb-11 max-w-[746px]">
        Duis non mi velit. Sed ultricies ultrices dapibus. Sed ut dui diam. Aliquam aliquam fringilla mi, vitae tincidunt urna accumsan sit amet.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center xl:justify-between">
        {proud.map((item) => (
          <div
            className="text-center min-w-[200px]"
            key={item.id}
          >
           <h3 className="heading-3 text-[#5C27FE] mb-2">{item.id == 3 && '+'}{item.proud}<span>{item.sign}</span></h3>
           <p className="pg-large">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proud;
