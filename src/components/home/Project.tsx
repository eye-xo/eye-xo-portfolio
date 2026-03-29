"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

/* ── data ── */
const projectItems = [
  {
    name: "EaseToLearn",
    summary: "A complete AI Education ecosystem",
    image: "https://ik.imagekit.io/rohitsahu5657/portfolio/etl_Oa53Rislu.png",
    features: ["Web/App", "Backend", "AI", "DevOps"],
  },
  {
    name: "Chatur AI",
    summary: "AI assisted hiring management",
    image: "https://ik.imagekit.io/rohitsahu5657/portfolio/chatur_X6g2XtZKx.png",
    features: ["Web", "Backend", "DevOps"],
  },
  {
    name: "Legal & BTC Wires",
    summary: "Built with Ghost CMS (Migrated from Wordpress)",
    image:
      "https://ik.imagekit.io/rohitsahu5657/portfolio/Legal%20and%20btc%20wires_P6P1We2n9",
    features: ["Web/App", "Ghost", "DevOps"],
  },
];

/* ── animation variants ── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      delay: i * 0.1,
    },
  }),
};

/** Card image scale on hover */
const imgVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.07, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

/** Text overlay — always visible on mobile, slides up on hover on desktop */
const overlayVariants: Variants = {
  rest: { y: 48, opacity: 0 },
  hover: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

/** Arrow rotates 45deg on hover */
const arrowVariants: Variants = {
  rest: { rotate: 0, x: 0, y: 0 },
  hover: {
    rotate: 45,
    x: 2,
    y: -2,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

/* ── component ── */
const Project = () => {
  return (
    <section className="container-wrapper flex flex-col gap-6">
      {/* Section header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h5 className="font-vt323 border-b-2 w-fit leading-6">Work</h5>
        <h4 className="leading-tight mt-2">Featured Projects</h4>
        <p className="text-sm mt-2 max-w-xl">
          A selection of systems I&apos;ve built that solve real problems at scale.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {projectItems.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={index}
            /* whileHover="hover" propagates to children using variants */
            whileHover="hover"
            animate="rest"
            className="rounded-3xl border border-slate-500 relative overflow-hidden cursor-pointer aspect-16/10"
          >
            {/* Image */}
            <motion.div variants={imgVariants} className="absolute inset-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover "
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
            </motion.div>

            {/* Gradient — stronger on mobile so text is always legible */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

            {/* Arrow ↗ — top-right corner, rotates on hover */}
            <motion.div
              variants={arrowVariants}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white"
            >
              <HiArrowUpRight className="text-base" />
            </motion.div>

            {/*
              Text overlay:
              - Mobile (< md): always visible — achieved by overriding transform/opacity via CSS
              - Desktop (md+): hidden by default, slides up on card hover via framer variants
            */}
            <motion.div
              variants={overlayVariants}
              className="
                absolute bottom-0 left-0 right-0 p-5 text-white
                translate-y-0 opacity-100
                md:translate-y-[unset] md:opacity-[unset]
              "
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {item.features.map((feature, j) => (
                  <span
                    key={j}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-white/60 bg-white/10 backdrop-blur-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              {/* Name + arrow row */}
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h6 className="font-semibold text-base leading-snug">{item.name}</h6>
                  <p className="text-gray-300 text-sm mt-0.5">{item.summary}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
