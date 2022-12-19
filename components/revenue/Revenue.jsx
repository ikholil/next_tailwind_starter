import trafficr from "../../public/images/expense/trafficr.png";
import chartr from "../../public/images/expense/chartr.png";
import tasks from "../../public/images/expense/tasks.png";
import Image from "next/image";

const Revenue = () => {
  return (
    <section className="px-3 2xl:px-0 py-[70px] md:py-[120px] bg-[#F5F6FC]">
      <div className="max-w-[1296px] mx-auto">
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-5 xl:gap-28 items-center">
          <div className="w-full md:w-4/12 flex items-center h-full shrink-0 justify-center">
            <div className="">
              <Image src={tasks} alt="tasks" />
            </div>
            <div className="relative lg:-left-8 flex flex-col gap-[14px]">
              <Image src={trafficr} alt="traffic" />
              <Image src={chartr} alt="chart" />
            </div>
          </div>
          <div className="w-full md:w-7/12 color-black shrink-0">
            <h2 className="heading-2 max-w-[606px] mb-2">Increase Revenue up to 80%</h2>
            <p className="pg-default">Duis non mi velit. Sed ultricies ultrices dapibus. Sed ut dui diam. Aliquam aliquam fringilla mi, vitae tincidunt urna accumsan sit amet. Nunc congue metus in lorem suscipit malesuada.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Revenue;
