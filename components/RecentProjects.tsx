"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "@/components/ui/Pin";

const RecentProjects = () => {
  return (
    <div className="pt-20 pb-10 text-white" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      {/* Adjust gap (default gap-16) below to place cards in a row - 2 or 3, adjust margin accordint to you */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-0 my-10">
        {projects.map((item) => (
          <div
            className="sm:h-[39rem] lg:min-h-[26.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw] "
            key={item.id}
          >
            <PinContainer title={item.name}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] md:h-[40vw] h-[30vh] lg:h-[45vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-2xl min-h-fit"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 w-[90%] rounded-lg"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a href={item.link} target="_blank">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      {item.type}
                    </p>
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
