"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn, staggerContainer } from "@/utils/motion";

const Hero = () => {
  return (
    <section className="container-wrapper flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
      {/* Headings */}
      <motion.div
        className="md:flex-[0.7] md:mt-auto flex flex-col"
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.15)}
      >
        <motion.h1 className="self-start" variants={fadeUp}>Software</motion.h1>
        <motion.h1 className="md:self-end" variants={fadeUp}>Engineer</motion.h1>
      </motion.div>

      {/* Image + bio */}
      <motion.div
        className="md:flex-[0.3] flex flex-col items-center md:items-end gap-6 md:gap-24"
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.2, 0.3)}
      >
        <motion.div variants={scaleIn}>
          <Image
            src='https://ik.imagekit.io/rohitsahu5657/portfolio/portfolio.png'
            alt="Rohit portrait"
            className="rounded-2xl w-auto md:h-[320px] h-[240px]"
            height={240}
            width={200}
            loading="eager"
          />
        </motion.div>
        <motion.div className="self-end" variants={fadeIn}>
          <h6 className="font-semibold text-end leading-5">
            Hey, I&apos;m Rohit <br /> A Software Engineer <br /> Scalable architecture & <br /> and systems.
          </h6>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
