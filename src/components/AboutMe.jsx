import React, { useState } from "react";
import { accordionData } from "src/constants/accordeon";

function AboutMe() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="relative pt-10 md:pt-30 px-2 md:px-4 flex flex-col md:flex-row">
        <h1
          className="relative z-10 bg-gradient-to-tr from-teal-900 via-emerald-600 to-green-400
          text-3xl md:text-7xl font-bold py-2 md:py-4 text-center md:text-left inline-block text-transparent bg-clip-text"
        >
          Mi Recorrido
        </h1>

        <div className="pt-4 md:pt-4 md:ml-28 w-full max-w-xl mx-auto">
          {accordionData.map((item, index) => (
            <div key={index} className="mb-3 md:mb-0">
              <button
                className="flex items-center justify-between w-full py-3 px-3 md:px-0 font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 gap-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                onClick={() => toggleAccordion(index)}
                style={{ minHeight: 56 }}
              >
                <h1 className="text-base md:text-lg text-left">{item.title}</h1>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fillRule="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.4881 15.5694C12.2072 15.8102 11.7928 15.8102 11.5119 15.5694L4.5119 9.5694C4.1974 9.2999 4.161 8.8264 4.4305 8.5119C4.7001 8.1974 5.1736 8.161 5.4881 8.4306L12 14.0122L18.5119 8.4306C18.8264 8.161 19.2999 8.1974 19.5694 8.5119C19.839 8.8264 19.8026 9.2999 19.4881 9.5694L12.4881 15.5694Z"
                    fill="#10b981"
                  ></path>
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="py-3 px-3 md:px-0 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {item.content}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.label.map((label, labelIndex) => (
                      <div
                        key={labelIndex}
                        className="inline-flex items-center px-2 py-0.5 border border-neutral-700 dark:border-neutral-500 bg-neutral-900 text-neutral-100 text-xs md:text-sm rounded-full f shadow-sm"
                        style={{ letterSpacing: "0.01em" }}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutMe;
