"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const Sidebar = ({
    toggle,
    setToggle,
}: {
    toggle: boolean;
    setToggle: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <AnimatePresence>
            {/* Overlay */}
            {toggle && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{ pointerEvents: toggle ? "auto" : "none" }} // Prevent interaction when not in view
                ></motion.div>
            )}

            {/* Sidebar */}
            {toggle && (
                <motion.div
                    className="h-screen bg-white w-1/2 fixed top-0 right-0 z-20 shadow-lg flex flex-col justify-center items-center space-y-6 text-black"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}>
                    {/* Hamburger Menu */}
                    <motion.div
                        className="absolute top-4 right-4 z-30 cursor-pointer"
                        onClick={() => setToggle(!toggle)}>
                        <motion.div
                            className="w-8 h-0.5 bg-black mb-1"
                            animate={
                                toggle
                                    ? { rotate: 45, y: 6 }
                                    : { rotate: 0, y: 0 }
                            }
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div
                            className="w-8 h-0.5 bg-black"
                            animate={toggle ? { opacity: 0 } : { opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div
                            className="w-8 h-0.5 bg-black mt-1"
                            animate={
                                toggle
                                    ? { rotate: -45, y: -6 }
                                    : { rotate: 0, y: 0 }
                            }
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    {/* Sidebar Links */}
                    <motion.div className="flex flex-col items-center space-y-6">
                        <Link href="/">
                            <motion.div
                                className="text-2xl font-bold"
                                initial={{ x: "100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "100%", opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: 0.2,
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}>
                                Home
                            </motion.div>
                        </Link>
                        <Link href="/">
                            <motion.div
                                className="text-2xl font-bold"
                                initial={{ x: "100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "100%", opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: 0.4,
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}>
                                About
                            </motion.div>
                        </Link>
                        <Link href="/">
                            <motion.div
                                className="text-2xl font-bold"
                                initial={{ x: "100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "100%", opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: 0.6,
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}>
                                Contact
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;
