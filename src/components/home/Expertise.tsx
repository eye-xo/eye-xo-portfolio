"use client";
import { SiGithub } from "react-icons/si";
import ExpertiseCards from "./ExpertiseCards";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/motion";

const Expertise = () => {
  return (
    <section className="container-wrapper gap-4 flex flex-col md:flex-row">
      <motion.div
        className="md:flex-[0.35] flex flex-col gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.15)}
      >
        <motion.h5 className="font-vt323 border-b-2 w-fit leading-6" variants={fadeUp}>
          Expertise
        </motion.h5>
        <motion.h4 className="leading-10" variants={fadeUp}>
          Technical skills accross the fullStack
        </motion.h4>
        <motion.p className="text-sm" variants={fadeUp}>
          I work across the entire spectrum of modern development. From responsive interfaces to
          distributed systems, I build with precision and purpose.
        </motion.p>
        <motion.div variants={fadeUp}>
          <Link href={"https://github.com/eye-xo"} target="_blank">
            <button className="flex gap-2 items-center w-fit">
              <SiGithub /> eye-xo
            </button>
          </Link>
        </motion.div>
      </motion.div>
      <div className="md:flex-[0.65]">
        <ExpertiseCards />
      </div>
    </section>
  );
};

export default Expertise;
