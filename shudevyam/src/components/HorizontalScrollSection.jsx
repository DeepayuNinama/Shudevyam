"use client";
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

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
      className="group relative h-[500px] w-[600px] overflow-hidden bg-neutral-200 flex-shrink-0"
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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[70vh] bg-white">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden justify-start pt-40">
        {/* Scrollable Cards */}
        <motion.div style={{ x }} className="flex gap-10">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
        
      </div>
    </section>
  );
}