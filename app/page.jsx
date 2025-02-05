'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        scrub: 1.23,
        end: () => "+=" + document.querySelector(".container").offsetWidth,
      },
    });
  }, []);

  return (
    <main className="w-full bg-gradient-to-r from-blue-500 to-sky-300 text-white font-[cursive]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center p-10">
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Mr. X’s Business</h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg mt-4 max-w-2xl mx-auto"
          >
            We specialize in delivering top-notch solutions with a creative and modern touch.
          </motion.p>
        </motion.div>
      </section>

      {/* Samples Section */}
      <section className="container flex">
        {sampleData.map((sample, index) => (
          <section key={index} className="panel flex items-center justify-center space-x-10 p-10 w-screen">
            <Image src={sample.image} alt={sample.caption} width={500} height={350} className="rounded-lg shadow-lg" />
            <div className="max-w-md">
              <h2 className="text-2xl font-bold">{sample.caption}</h2>
              <p className="mt-2 text-sm">{sample.description}</p>
              <Link href={sample.link} className="text-blue-300 underline mt-4 inline-block">View Project</Link>
            </div>
          </section>
        ))}
      </section>

      {/* Contact Me Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-10 bg-blue-600">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="mt-4 max-w-2xl">Have a project in mind? Let's work together! Reach out via email or social media.</p>
        <div className="mt-6 flex space-x-4">
          <a href="mailto:contact@mrxbusiness.com" className="text-white underline">Email</a>
          <a href="#" className="text-white underline">LinkedIn</a>
          <a href="#" className="text-white underline">Twitter</a>
        </div>
      </section>
    </main>
  );
}

const sampleData = [
  { image: 'https://picsum.photos/seed/picsum/200/300', caption: 'Project 1', description: 'A groundbreaking project that changes the way we interact.', link: '#' },
  { image: 'https://picsum.photos/seed/picsum/200/300', caption: 'Project 2', description: 'An innovative approach to solving modern-day problems.', link: '#' },
  { image: 'https://picsum.photos/seed/picsum/200/300', caption: 'Project 3', description: 'A creative solution to enhance productivity.', link: '#' },
  { image: 'https://picsum.photos/seed/picsum/200/300', caption: 'Project 4', description: 'A futuristic design aimed at redefining user experience.', link: '#' },
];