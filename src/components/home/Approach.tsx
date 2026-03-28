"use client";
import React from "react";
import { motion } from "framer-motion";
import { scaleInSm, fadeUp, staggerContainer } from "@/utils/motion";

type ApproachItem = {
  title: string;
  subTitle: string;
  description: string;
};

const approachItems: ApproachItem[] = [
  {
    title: "I start with constraints, not solutions",
    subTitle: "Problem first",
    description:
      "Every system has trade-offs. I map them clearly before writing code. What matters most? Latency, throughput, cost, or maintainability? The answer shapes everything.",
  },
  {
    title: "Build systems that breathe under pressure",
    subTitle: "Design for scale",
    description:
      "Scalability isn't an afterthought. I design for 10x load from day one. Caching strategies, database indexing, async patterns—these decisions compound.",
  },
  {
    title: "You can't fix what you can't measure",
    subTitle: "Observe everything",
    description: "Logging, metrics, traces. I instrument systems to see what's happening in production. Observability is how you sleep at night.",
  },
  {
    title: "Good tools compound team velocity",
    subTitle: "Developer experience matters",
    description: "Clear APIs, solid documentation, fast feedback loops. When developers move fast, the business moves fast. I optimize for both.",
  },
];

const Approach = () => {
  return (
    <section className="container-wrapper flex flex-col gap-8">
      {approachItems.map((item, index) => (
        <motion.div
          className="flex flex-col md:flex-row"
          key={index}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer(0.15)}
        >
          <motion.div className="md:flex-[0.3] flex md:items-center md:justify-center" variants={scaleInSm}>
            <h1 className="font-semibold text-blue-400 font-vt323 text-5xl md:text-9xl">0{index + 1}</h1>
          </motion.div>
          <motion.div className="border-t border-slate-300 flex flex-col gap-4 md:flex-[0.7] py-5" variants={fadeUp}>
            <p className="font-semibold">{item.subTitle}</p>
            <h4 className="w-full md:w-3/5 font-semibold">{item.title}</h4>
            <p className="text-foreground">{item.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default Approach;
