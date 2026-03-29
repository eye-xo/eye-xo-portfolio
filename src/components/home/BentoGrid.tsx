"use client";

import { useState } from "react";
import Image from "next/image";
import type { Variants } from "framer-motion";
import { SiCaldotcom } from "react-icons/si";
import { IoMdTime } from "react-icons/io";
import { BsFillCalendar2DateFill, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail, MdSend } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────── animation variants ─────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      delay: i * 0.07,
    },
  }),
};

/* ═══════════════════ MAIN GRID ═══════════════════ */

const BentoGrid = () => {
  return (
    <section className="container-wrapper flex flex-col justify-center items-center">
      {/*
        Outer: two columns — profile left | cards right
        Mobile: stacked; md+: side-by-side
      */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* ── PROFILE COLUMN ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          className="md:w-[300px] lg:w-[420px] shrink-0 flex flex-col gap-4"
        >
          {/* Avatar */}
          <div className="w-20 h-20 md:w-36 md:h-36 rounded-full bg-foreground flex items-center justify-center overflow-hidden shadow-lg">
            <Image
              src="https://ik.imagekit.io/rohitsahu5657/portfolio/rohit_d57sc24l7.jpeg"
              alt="Rohit Roshan Sahu"
              width={80}
              height={80}
              className="object-cover h-full w-full"
              loading="lazy"
            />
          </div>

          {/* Name + badge */}
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-semibold leading-tight font-vt323">Rohit Roshan Sahu</h3>
            </div>
            <p className="text-sm mt-1 text-gray-500">Tech Lead at EaseToLearn, Delhi</p>
          </div>
        </motion.div>

        {/* ── CARDS GRID ── */}
        {/*
          Inner grid: 4 equal columns on md+
          Row 1: Cal (span 2) | Github (span 1) | Map (span 1)
          Row 2: Instagram (span 1) | LinkedIn (span 1) | Email (span 2)
        */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-auto">
          {/* ── Cal Scheduler — col span 2 ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            className="col-span-2"
          >
            <CalBentoScheduler />
          </motion.div>

          {/* ── Github ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            className="col-span-1"
          >
            <GithubBento />
          </motion.div>

          {/* ── Location ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
            className="col-span-1"
          >
            <LocationBento />
          </motion.div>

          {/* ── Instagram ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={4}
            className="col-span-1"
          >
            <InstaBento />
          </motion.div>

          {/* ── LinkedIn ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={5}
            className="col-span-1"
          >
            <LinkedInBento />
          </motion.div>

          {/* ── Email — col span 2 ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={6}
            className="col-span-2"
          >
            <EmailBento />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════ CARD COMPONENTS ═══════════════════ */

/* ── Cal Scheduler ── */
const CalBentoScheduler = () => (
  <motion.div
    whileHover={{ scale: 1.015 }}
    transition={{ type: "spring", stiffness: 300, damping: 22 }}
    className="p-4 bg-[#006BFF] flex rounded-2xl min-h-48 shadow h-full"
  >
    {/* Left — info */}
    <div className="flex-1 border-r border-blue-300/40 pr-4 flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <div className="bg-white/10 w-fit p-2 rounded-xl">
            <SiCaldotcom className="text-xl text-white" />
          </div>
          <span className="text-[8px] md:text-[11px] bg-white/20 text-white flex items-center gap-1 rounded-full px-2.5 py-1">
            <IoMdTime className="text-sm" />
            15 min
          </span>
        </div>
        <p className="font-semibold text-white text-sm leading-snug">15 Minute Meeting</p>
      </div>
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => window.open("https://cal.eu/eye-xo/15min", "_blank")}
        className="w-fit bg-white text-blue-600 font-semibold text-xs flex gap-1.5 items-center border-0 px-3 py-1.5 rounded-full"
      >
        Book now <BsFillCalendar2DateFill />
      </motion.button>
    </div>

    {/* Right — upcoming slots */}
    <div className="pl-4 min-w-[110px] flex flex-col gap-1">
      <p className="text-[10px] font-bold text-blue-100 tracking-widest uppercase mb-1">Upcoming Slots</p>
      <p className="text-xs text-white/60">MON 18.30-21.30</p>
      <p className="text-xs text-white/60">TUE 18.30-21.30</p>
      <p className="text-xs text-white/60">WED 18.30-21.30</p>
      <p className="text-xs text-white/60">THU 18.30-21.30</p>
      <p className="text-xs text-white/60">FRI 18.30-21.30</p>
      <p className="text-xs text-white/60">SAT 18.30-21.30</p>
    </div>
  </motion.div>
);

/* ── Github ── */
const GithubBento = () => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 22 }}
    className="p-4 border border-slate-200 dark:border-slate-700 bg-background shadow rounded-2xl min-h-48 flex flex-col justify-between h-full"
  >
    <div className="flex flex-col gap-2">
      <motion.div
        initial={{ scale: 0.7, rotate: -12 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 220 }}
      >
        <BsGithub className="text-foreground text-3xl" />
      </motion.div>
      <div>
        <h6 className="font-semibold text-foreground text-sm">Github</h6>
        <p className="text-xs text-gray-400">@eye-xo</p>
      </div>
    </div>
    <motion.button
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => window.open("https://github.com/eye-xo", "_blank")}
      className="w-fit flex items-center gap-2 bg-foreground text-background border-0 text-xs px-3 py-1.5 rounded-full font-medium"
    >
      Follow
    </motion.button>
  </motion.div>
);

/* ── Location ── */
const LocationBento = () => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 22 }}
    className="rounded-2xl overflow-hidden relative min-h-48 shadow border border-slate-200 dark:border-slate-700 h-full"
  >
    <Image
      src="https://ik.imagekit.io/rohitsahu5657/portfolio/map.png"
      alt="San Francisco map"
      fill
      className="object-cover"
      sizes="(max-width: 640px) 50vw, 200px"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
    <p className="absolute bottom-2 left-3 text-white text-[11px] font-semibold drop-shadow">Delhi, India</p>
  </motion.div>
);

/* ── Instagram ── */
const InstaBento = () => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 22 }}
    className="p-4 border border-slate-200 dark:border-slate-700 bg-background shadow rounded-2xl min-h-48 flex flex-col justify-between h-full"
  >
    <div className="flex flex-col gap-1.5">
      <motion.div
        initial={{ scale: 0.7, rotate: 12 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 220 }}
      >
        <BsInstagram className="text-[28px]" style={{ color: "#C13584" }} />
      </motion.div>
      <p className="text-xs font-semibold text-foreground">@ig_eyexo</p>
    </div>
    <motion.button
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => window.open("https://instagram.com/ig_eyexo", "_blank")}
      className="w-fit flex items-center gap-2 bg-[#006BFF] text-white border-0 text-xs px-3 py-1.5 rounded-full font-medium"
    >
      Follow <span className="text-white/70">240+</span>
    </motion.button>
  </motion.div>
);

/* ── LinkedIn ── */
const LinkedInBento = () => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 22 }}
    className="p-4 border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950 shadow rounded-2xl min-h-48 flex flex-col justify-between h-full"
  >
    <div className="flex flex-col gap-1.5">
      <motion.div
        initial={{ scale: 0.7, rotate: -12 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 220 }}
      >
        <BsLinkedin className="text-[28px] text-blue-700" />
      </motion.div>
      <div>
        <p className="text-xs font-semibold text-foreground">LinkedIn</p>
        <p className="text-[11px] text-gray-400">@rohit-roshan-sahu-</p>
      </div>
    </div>
    <motion.button
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => window.open("https://linkedin.com/in/rohit-roshan-sahu-", "_blank")}
      className="w-fit bg-blue-700 dark:bg-blue-500 text-white border-0 text-xs px-3 py-1.5 rounded-full font-medium"
    >
      Connect <span className="text-white/70 text-[8px] md:text-[11px]">1.5K+</span>
    </motion.button>
  </motion.div>
);

/* ── Email + Modal ── */
const EmailBento = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.015 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="p-4 border border-slate-200 dark:border-slate-700 bg-background shadow rounded-2xl min-h-48 flex flex-col justify-between h-full"
      >
        <div className="flex flex-col gap-1.5">
          <motion.div initial={{ scale: 0.7 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 220 }}>
            <MdEmail className="text-foreground text-3xl" />
          </motion.div>
          <div>
            <p className="text-sm font-semibold text-foreground">Send an Email</p>
            <p className="text-xs text-gray-400 mt-0.5">Drop me a message</p>
          </div>
        </div>

        {/* Full-width black contact button — matches reference exactly */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setOpen(true)}
          className="
            w-full flex items-center justify-center gap-2
            bg-foreground text-background
            border-0 text-sm font-semibold
            py-2.5 rounded-xl
          "
        >
          Contact <MdEmail className="text-base" />
        </motion.button>
      </motion.div>

      <EmailModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

/* ═══════════════════ macOS EMAIL MODAL ═══════════════════ */

interface EmailModalProps {
  open: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EmailModal = ({ open, onClose }: EmailModalProps) => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // ↳ Replace with your email API call (Resend, EmailJS, mailto, etc.)
    await new Promise((r) => setTimeout(r, 1300));
    setSending(false);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", subject: "", message: "" });
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal — macOS window */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 340, damping: 26 }}
            className="
              fixed z-50
              left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              w-[min(520px,calc(100vw-2rem))]
              bg-white dark:bg-[#1c1c1e]
              rounded-2xl shadow-2xl overflow-hidden
              border border-slate-200 dark:border-slate-700
            "
          >
            {/* ─── macOS title bar ─── */}
            <div className="flex items-center gap-0 px-4 py-3 bg-slate-100 dark:bg-[#2a2a2c] border-b border-slate-200 dark:border-slate-700 select-none">
              <div className="flex items-center gap-2 mr-3">
                <MacDot color="#FF5F57" hoverColor="#e0443e" onClick={onClose} title="Close" />
                <MacDot color="#FEBC2E" hoverColor="#e0a020" onClick={onClose} title="Minimize" />
                <MacDot color="#28C840" hoverColor="#1aab2e" onClick={undefined} title="Maximize" />
              </div>
              <p className="flex-1 text-center text-sm font-medium text-slate-500 dark:text-slate-400 pr-16">New Message</p>
            </div>

            {/* ─── Form ─── */}
            <form onSubmit={handleSend} className="p-5 flex flex-col gap-4">
              <MailRow label="From" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required />
              <MailRow label="Reply-to" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
              <MailRow
                label="Subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
              />

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write your message here…"
                  className="
                    w-full bg-slate-50 dark:bg-[#2a2a2c]
                    border border-slate-200 dark:border-slate-600
                    rounded-xl px-3 py-2.5 text-sm text-foreground
                    placeholder-slate-400 focus:outline-none
                    focus:ring-2 focus:ring-blue-500 resize-none transition
                  "
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-1">
                <button type="button" onClick={onClose} className="text-sm text-slate-500 bg-transparent border-slate-200 dark:border-slate-600">
                  Cancel
                </button>
                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex gap-2 items-center bg-blue-600 hover:bg-blue-700 text-white border-0 text-sm font-semibold disabled:opacity-60 transition-colors"
                >
                  {sent ? (
                    "Sent ✓"
                  ) : sending ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="inline-block"
                      >
                        ↻
                      </motion.span>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send <MdSend />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

/* ── macOS traffic-light dot ── */
interface MacDotProps {
  color: string;
  hoverColor: string;
  onClick?: () => void;
  title: string;
}

const MacDot = ({ color, hoverColor, onClick, title }: MacDotProps) => (
  <motion.button
    type="button"
    onClick={onClick}
    whileHover={{ scale: 1.25, backgroundColor: hoverColor }}
    title={title}
    className="w-3 h-3 rounded-full border-0 p-0 cursor-pointer shrink-0"
    style={{ backgroundColor: color }}
  />
);

/* ── Mail form field row ── */
interface MailRowProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}

const MailRow = ({ label, name, type, value, onChange, placeholder, required }: MailRowProps) => (
  <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-700 pb-2">
    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest w-16 shrink-0">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="flex-1 bg-transparent text-sm text-foreground placeholder-slate-400 focus:outline-none"
    />
  </div>
);

export default BentoGrid;
