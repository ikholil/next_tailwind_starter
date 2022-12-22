import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { faqs } from "../../data/faq"

const Faq = () => {
    const [selected, setSelected] = useState(null);
    const toggle = (id) => {
      if (selected == id) {
        return setSelected(null);
      }
      setSelected(id);
    };
    return (
      <section className="max-w-[1296px] mx-auto pb-[50px] md:pb-[100px]">
        <div className="color-black text-center flex flex-col items-center px-3 2xl:px-0">
          <h2 className="heading-2 mb-5">Frequently Asked Questions</h2>
          <p className="pg-default mb-10 md:mb-11 max-w-[746px]">
          Duis non mi velit. Sed ultricies ultrices dapibus. Sed ut dui diam. Aliquam aliquam fringilla mi, vitae tincidunt urna accumsan sit amet.
          </p>
        </div>
        <div className="max-w-[856px] mx-auto px-3 2xl:px-0">
            {faqs.map((faq) => (
              <div
                className="cursor-pointer border border-[#B0C3F0] rounded-[10px] bg-[#F5F6FC] mb-5 md:mb-[30px]"
                key={faq.id}
                onClick={() => toggle(faq.id)}
              >
                <div className="flex justify-between p-3 md:p-5">
                  <h5 className="heading-5 color-text-medium">
                    {faq.question}
                  </h5>
                  <span className="btn-primary w-8 h-8 flex items-center justify-center rounded-[10px] shrink-0">
                    <BsChevronDown
                      className={`${
                        selected == faq.id ? "rotate-180" : "rotate-0"
                      } color-secondary text-2xl transition-all duration-500`}
                    />
                  </span>
                </div>
                <div
                  className={`${
                    selected == faq.id ? "content show" : "content"
                  } px-5`}
                >
                  <p className={`pg-default color-text-light border-t border-[#B0C3F0] py-3 md:py-5`}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
      </section>
    );
  };
  
  export default Faq;