"use client";
import React, { useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

// --- Data for the cards ---
const cards = [
  {
    url: "./images/image.png",
    title: "Project One",
    id: 1,
  },
  {
    url: "./images/image.png",
    title: "Red Series",
    id: 2,
  },
  {
    url: "./images/image.png",
    title: "White Glass",
    id: 3,
  },
  {
    url: "./images/image.png",
    title: "Vibe Yellow",
    id: 4,
  },
  {
    url: "./images/image.png",
    title: "Leather",
    id: 5,
  },
];

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[50vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] w-72 sm:w-80 md:w-96 lg:w-[500px] overflow-hidden bg-neutral-200 shrink-0"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        {/* <p className="bg-gradient-to-br from-white/20 to-white/0 p-4 text-4xl font-black uppercase text-white backdrop-blur-sm border border-white/20">
          {card.title}
        </p> */}
      </div>
    </div>
  );
};

export default function HorizontalScrollSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-85%"]);
  const smoothX = useSpring(x, { stiffness: 100, damping: 30, mass: 0.5 });

  return (
    <section ref={targetRef} className="relative h-auto bg-white w-full overflow-hidden">
      <div className="sticky top-0 flex h-auto flex-col overflow-hidden justify-start items-start w-full pt-8 sm:pt-12 md:pt-16 lg:pt-20">
        {/* Scrollable Cards */}
        <motion.div style={{ x: smoothX }} className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 pl-4 sm:pl-8 md:pl-20">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}