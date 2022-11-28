import Link from "next/link";
import { pricing } from "../../data/pricing";

const Pricing = () => {
  return (
    <section className="max-w-[1296px] mx-auto my-[60px] md:mt-[102px] md:mb-[102px]" id="pricing">
      <div className="color-black text-center flex flex-col items-center mx-3 2xl:mx-0">
        <h2 className="heading-2 mb-4">Pricing</h2>
        <p className="pg-default mb-10 md:mb-14 max-w-[746px]">
        Sed tincidunt vestibulum diam quis auctor. Ut vitae nulla neque. Maecenas eu dolor quis massa condimentum euismod
        </p>
      </div>
      <div className="flex flex-wrap gap-6 mx-2 2xl:mx-0 justify-center">
        {pricing.map((plan) => (
          <div
            className="w-[310px] sm:w-[416px] bg-white rounded-[20px] color-black px-[30px] pt-3 shadow-[0px_4px_18px_rgba(134,134,134,0.25)] pb-[30px]"
            key={plan.id}
          >
            <h2 className="heading-2 mb-5">${plan.price}<span className="heading-5">/mo</span></h2>
            <h4 className="heading-4 mb-5">{plan.title}</h4>
            <p className="pg-default pb-6 border-b border-[#994CEA]">{plan.desc}</p>
            <ul className="mt-7 mb-10 pb-4 list-inside border-b border-[#B0C3F0]">
                {
                    plan.features.map((feature, index) => (
                        <li className="list my-3" key={index}>{feature}</li>
                    ))
                }
            </ul>
           <Link className="btn w-full flex justify-center btn-primary shadow-none sheen" href="#">Get started</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;