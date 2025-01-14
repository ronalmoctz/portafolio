import React, { useState } from 'react';
import { accordionData } from 'src/constants/accordeon';

function AboutMe() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="relative pt-20 md:pt-36 px-4 flex flex-col md:flex-row">
        <h1
          className="relative z-10 bg-gradient-to-tr from-teal-900 via-emerald-600 to-green-400
          text-4xl md:text-7xl font-bold py-4 text-center md:text-left inline-block text-transparent bg-clip-text"
        >
          Mi Recorrido
        </h1>

        <div className="pt-6 md:pt-4 md:ml-28">
          {accordionData.map((item, index) => (
            <div key={index}>
              <button
                className="flex items-center justify-between w-full py-4 font-medium text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                onClick={() => toggleAccordion(index)}
              >
                <h1>{item.title}</h1>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fillRule="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.4881 15.5694C12.2072 15.8102 11.7928 15.8102 11.5119 15.5694L4.5119 9.5694C4.1974 9.2999 4.161 8.8264 4.4305 8.5119C4.7001 8.1974 5.1736 8.161 5.4881 8.4306L12 14.0122L18.5119 8.4306C18.8264 8.161 19.2999 8.1974 19.5694 8.5119C19.839 8.8264 19.8026 9.2999 19.4881 9.5694L12.4881 15.5694Z"
                    fill="#F1F3F7"
                  ></path>
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index
                    ? 'max-h-screen opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="py-4 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-gray-500 dark:text-gray-400">
                    {item.content}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.label.map((label, labelIndex) => (
                      <div
                        key={labelIndex}
                        className="inline-flex border border-gray-400 px-2 rounded-full text-gray-400"
                      >
                        <span className="mr-2">{label}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fillRule="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          width="24"
                          height="24"
                          strokeWidth="1.5"
                        >
                          <path d="M5 12l5 5l10 -10"></path>
                        </svg>
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
