'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger);

export default function MosaicLanding() {
  const showcaseRef = useRef(null);

  useEffect(() => {
    const element = showcaseRef.current;
    gsap.to(element, {
      x: '-150%',
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        end: '+=300%',
        scrub: 1,
        pin: true,
      },
    });
  }, []);

  return (
    <main className="bg-gradient-to-b from-sky-400 to-blue-700 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center min-h-screen text-center p-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold"
        >
          Masterpieces in Mosaics
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-2xl max-w-4xl"
        >
          Transform your space with stunning handcrafted mosaics, blending tradition and creativity.
        </motion.p>
      </section>

      {/* Showcase Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div ref={showcaseRef} className="flex gap-10 px-10 w-[400%] min-w-full">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex-shrink-0 w-screen flex flex-col items-center">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="w-full">
                <Image
                  src={`https://picsum.photos/1500/1000?random=${num}`}
                  alt={`Mosaic ${num}`}
                  width={1200} // Ensures consistency
                  height={800}
                  className="rounded-2xl shadow-lg w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
                />
              </motion.div>
              <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-center">
                Stunning Mosaic Artwork #{num}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col justify-center items-center min-h-screen text-center p-10 bg-blue-600">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg md:text-2xl max-w-3xl"
        >
          Let's create something amazing together. Get in touch today!
        </motion.p>
        <motion.div 
          className="mt-16" 
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.3 }}
        >
          <Link
            href="mailto:contact@mosaicworkshop.com"
            className="px-6 py-3 bg-white text-blue-900 font-semibold text-lg rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            Reach Out
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
