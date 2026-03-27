import React from "react";
import { MdDevices, MdStorage, MdCloudQueue, MdArchitecture } from "react-icons/md";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiGraphql,
  SiRedis,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

const expertiseData = [
  {
    title: "Frontend",
    categoryIcon: <MdDevices size={22} />,
    techStack: [
      { icon: <SiHtml5 />, color: "text-orange-500" },
      { icon: <SiCss />, color: "text-blue-500" },
      { icon: <SiJavascript />, color: "text-yellow-400" },
      { icon: <SiReact />, color: "text-cyan-400" },
      { icon: <SiTailwindcss />, color: "text-sky-400" },
    ],
  },
  {
    title: "Backend",
    categoryIcon: <MdStorage size={22} />,
    techStack: [
      { icon: <SiNodedotjs />, color: "text-green-500" },
      { icon: <SiPython />, color: "text-blue-400" },
      { icon: <SiPostgresql />, color: "text-indigo-400" },
      { icon: <SiMongodb />, color: "text-emerald-500" },
      { icon: <SiRedis />, color: "text-red-500" },
    ],
  },
  {
    title: "DevOps",
    categoryIcon: <MdCloudQueue size={22} />,
    techStack: [
      { icon: <SiDocker />, color: "text-blue-500" },
      { icon: <SiKubernetes />, color: "text-blue-600" },
      { icon: <FaAws />, color: "text-orange-400" },
      { icon: <SiGithubactions />, color: "text-gray-400" },
    ],
  },
  {
    title: "Architecture",
    categoryIcon: <MdArchitecture size={22} />,
    techStack: [
      { icon: <SiGraphql />, color: "text-pink-500" },
      { icon: <MdStorage />, color: "text-gray-400" },
      { icon: <MdCloudQueue />, color: "text-gray-400" },
      { icon: <SiRedis />, color: "text-red-500" },
    ],
  },
];

const ExpertiseCards = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 bg-white dark:bg-gray-950">
      {expertiseData.map((item, index) => (
        <div
          key={index}
          className="flex h-44 flex-col justify-between rounded-2xl border border-gray-100 bg-gray-50/50 p-6 dark:border-gray-800 dark:bg-gray-900/50"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm dark:bg-gray-800 ">
              {item.categoryIcon}
            </div>
            <h3 className="text-lg text-gray-800 dark:text-white">{item.title}</h3>
          </div>

          <div className="relative mt-4 overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex w-max animate-scroll gap-4 py-2 hover:[animation-play-state:paused]">
              {[...item.techStack, ...item.techStack, ...item.techStack].map((tech, idx) => (
                <span key={idx} className={`text-3xl transition-transform hover:scale-110 ${tech.color}`}>
                  {tech.icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExpertiseCards;
