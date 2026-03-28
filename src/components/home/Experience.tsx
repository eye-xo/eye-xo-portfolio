"use client";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeLeft, fadeUpSm, staggerContainer } from "@/utils/motion";
import type { Variants } from "framer-motion";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  companyName: string;
  empType: string;
};

const timelineData: TimelineItem[] = [
  {
    year: "2025 – Present",
    title: "Software Engineer",
    description: "Built customer-facing products. Shipped major features and mentored engineers.",
    companyName: "EaseToLearn",
    empType: "Full-Time, Delhi",
  },
  {
    year: "2024 - 2025",
    title: "Backend Developer",
    description: "Designed database architecture supporting 100x growth at early-stage startup.",
    companyName: "Wasserstoff",
    empType: "Full-Time, Gurugram",
  },
  {
    year: "2024 - 2025",
    title: "Full Stack Developer",
    description: "Built responsive interfaces. Improved performance metrics by 40%.",
    companyName: "Octogram Studios",
    empType: "Part-Time, Gurugram",
  },
  {
    year: "2022 - 2023",
    title: "Frontend Developer",
    description: "Started career, built first production API and learned systems thinking.",
    companyName: "InDNA Life Sciences",
    empType: "Full-Time, Bhubaneswar",
  },
];

const sidebarVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const Experience = () => {
  return (
    <section className="container-wrapper">
      <div className="py-8 md:py-16 flex flex-col md:flex-row gap-4 px-1 md:h-80 md:overflow-y-scroll scrollbar-hide relative">
        {/* Sidebar */}
        <motion.div
          className="flex flex-col gap-4 md:flex-[0.35] md:justify-center md:sticky md:top-0"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={sidebarVariants}
        >
          <motion.h5 className="font-vt323 border-b-2 w-fit leading-6" variants={fadeLeft}>Career</motion.h5>
          <motion.h4 className="leading-10" variants={fadeLeft}>Where I&apos;ve worked &amp; what I&apos;ve built</motion.h4>
          <motion.p className="text-sm" variants={fadeLeft}>
            My career summary. Four years of shipping production systems. From startups to scale, I&apos;ve owned the full life cycle.
          </motion.p>
          <motion.div variants={fadeLeft}>
            <Link href={"https://github.com/eye-xo"} target="_blank">
              <button className="flex gap-2 items-center w-fit">
                <FaLinkedin /> Rohit R. Sahu
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Timeline cards */}
        <motion.div
          className="flex flex-col gap-2 py-5 md:flex-[0.65] relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer(0.12)}
        >
          {timelineData.map((item, index) => (
            <motion.div
              variants={fadeUpSm}
              key={index}
              className={`rounded-md flex flex-col md:flex-row-reverse md:items-center md:justify-between border border-slate-300 hover:bg-slate-50 
            cursor-pointer hover:border-slate-400 py-4 px-5 md:px-8
            hover:dark:bg-slate-800 gap-2 md:gap-0 ${index == 0 && "bg-blue-50 dark:bg-blue-950"}`}
              whileHover={{ scale: 1.01, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <div className="flex flex-col">
                <h6 className="leading-5 font-semibold">{item.year}</h6>
                <p className="text-sm">{item.companyName}</p>
              </div>
              <div className="flex flex-col md:w-3/5 md:text-end">
                <h5 className="leading-5">{item.title}</h5>
                <p className="font-vt323">{item.empType}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
