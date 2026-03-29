"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { BsInstagram, BsLinkedin, BsGithub, BsArrowRight } from "react-icons/bs";
import { SiCaldotcom } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const CAL_URL = "https://cal.com/eye-xo/15min";

/* ─────────────────── iOS Drag-to-Book Slider ─────────────────── */

const SlideToBook = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [unlocked, setUnlocked] = useState(false);

  /* thumb bg colour fades white → blue as it slides right */
  const thumbBg = useTransform(x, [0, 260], ["#ffffff", "#006BFF"]);
  /* track text fades out as thumb moves right */
  const trackOpacity = useTransform(x, [0, 120], [1, 0]);
  /* arrow icon fades out */
  const arrowOpacity = useTransform(x, [0, 80], [1, 0]);

  const handleDragEnd = () => {
    if (!trackRef.current) return;
    const trackWidth = trackRef.current.offsetWidth;
    const thumbSize = 56; // px
    const threshold = trackWidth - thumbSize - 8; // 8px padding

    if (x.get() >= threshold * 0.88) {
      // snap to end, show unlocked, redirect
      animate(x, threshold, { type: "spring", stiffness: 400, damping: 30 });
      setUnlocked(true);
      setTimeout(() => window.open(CAL_URL, "_blank"), 400);
      setTimeout(() => {
        animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
        setUnlocked(false);
      }, 2400);
    } else {
      // snap back
      animate(x, 0, { type: "spring", stiffness: 400, damping: 30 });
    }
  };

  return (
    <div
      ref={trackRef}
      className="relative w-full max-w-sm h-16 rounded-full bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20
        flex items-center overflow-hidden select-none"
    >
      {/* Track label */}
      <motion.span
        style={{ opacity: trackOpacity }}
        className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-foreground/80 pointer-events-none"
      >
        {unlocked ? "Opening Cal…" : "Slide to book a call →"}
      </motion.span>

      {/* Draggable thumb */}
      <motion.div
        drag="x"
        dragConstraints={trackRef}
        dragElastic={0.02}
        dragMomentum={false}
        style={{ x, backgroundColor: thumbBg }}
        onDragEnd={handleDragEnd}
        className="
          absolute left-1 w-14 h-14 rounded-full
          flex items-center justify-center
          shadow-lg cursor-grab active:cursor-grabbing
          z-10
        "
      >
        <motion.span style={{ opacity: arrowOpacity }} className="flex items-center justify-center text-[#006BFF]">
          {unlocked ? <SiCaldotcom className="text-white text-xl" /> : <BsArrowRight className="text-xl" />}
        </motion.span>
      </motion.div>
    </div>
  );
};

/* ─────────────────── Footer ─────────────────── */

const socialLinks = [
  { icon: BsGithub, href: "https://github.com/eye-xo", label: "GitHub" },
  { icon: BsLinkedin, href: "https://linkedin.com/in/rohit-roshan-sahu-", label: "LinkedIn" },
  { icon: BsInstagram, href: "https://instagram.com/ig_eyexo", label: "Instagram" },
  { icon: MdEmail, href: "mailto:rohit@easetolearn.com", label: "Email" },
];

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Connect", href: CAL_URL },
];

const Footer = () => {
  return (
    <footer className="container-fluid text-foreground border-t-foreground/10 border-t overflow-hidden">
      {/* ── Hero CTA band ── */}
      <div className="container-wrapper py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col w-full items-center gap-4"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-foreground/50 uppercase">Available for freelance</span>
          <h2 className="font-bold leading-[1.1] max-w-3xl text-foreground">
            Let&apos;s connect
            <br className="hidden sm:block" /> now.
          </h2>
        </motion.div>

        {/* iOS slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full flex flex-col items-center gap-4 justify-center px-4"
        >
          <SlideToBook />
          <p className="text-foreground/60 max-w-md text-sm md:text-base">
            Got a project in mind, a role to fill, or just want to say hi? Book a 15-minute call and let&apos;s make it happen.
          </p>
        </motion.div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-foreground/10" />

      {/* ── Quote band ── */}
      <div className="container-wrapper py-10 md:py-14 flex flex-col items-center text-center gap-3">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex flex-col md:flex-row gap-1">
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground/90 leading-tight italic">&ldquo;Jack of all,</p>
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground/90 leading-tight italic">master of none.&rdquo;</p>
          </div>
          {/* <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground/90 leading-tight italic">
            &ldquo;Jack of all,
            <br /> master of none.&rdquo;
          </p> */}
          {/* <cite className="block mt-4 text-xs text-background/40 not-italic tracking-widest uppercase">
            — Rohit Roshan Sahu
          </cite> */}
        </motion.blockquote>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-foreground/10" />

      {/* ── Bottom bar ── */}
      <div className="container-wrapper py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Nav links */}
        <nav className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-foreground/50 hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="text-foreground/50 hover:text-foreground transition-colors text-lg"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-foreground/30">© {new Date().getFullYear()} Rohit Roshan Sahu</p>
      </div>
    </footer>
  );
};

export default Footer;
