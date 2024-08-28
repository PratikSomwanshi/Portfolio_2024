"use client";
import React from "react";
import { motion } from "framer-motion";
import Meteors from "@/components/magicui/meteors";

const text = "Hello, I am Pratik";

const textVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.8,
    },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: index * 0.1,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

function Page() {
    return (
        <div className="h-[96vh] w-[98vw]">
            <div className="relative h-full w-full overflow-hidden">
                <Meteors number={30} />

                {/* <motion.h1
                    className="text-6xl font-bold text-white flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}>
                    {text.split("").map((char, index) =>
                        char.trim() === "" ? (
                            <span key={index}>&nbsp;</span> // Render whitespace without animation
                        ) : (
                            <motion.span
                                key={index}
                                variants={textVariants}
                                custom={index}>
                                {char}
                            </motion.span>
                        )
                    )}
                </motion.h1> */}
            </div>
        </div>
    );
}

export default Page;
