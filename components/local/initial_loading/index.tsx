import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const InitialLoading = ({
    setIsComplete,
}: {
    setIsComplete: (isComplete: boolean) => void;
}) => {
    const [progress, setProgress] = useState(0);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsComplete(true);
                    return 100;
                }
                return prev + 5;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [setIsComplete]);

    return (
        <div className="h-full w-full overflow-hidden">
            <motion.div
                className="flex flex-col gap-8 items-center h-full w-full justify-center "
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}>
                <motion.div
                    className="flex items-center justify-center "
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}>
                    <div className="flex items-center justify-center p-4 w-full h-full">
                        <motion.h1
                            ref={ref}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white  flex flex-wrap">
                            {["L", "o", "a", "d", "i", "n", "g"].map(
                                (letter, index) => (
                                    <motion.span
                                        key={index}
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{
                                            duration: 1,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            delay: index * 0.2,
                                        }}
                                        className="inline">
                                        {letter}
                                    </motion.span>
                                )
                            )}
                            <motion.span
                                animate={{ translateX: [0, 5, 0] }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                                className="inline-block">
                                .
                            </motion.span>
                            <motion.span
                                animate={{ translateX: [0, 5, 0] }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    delay: 0.2,
                                }}
                                className="inline-block">
                                .
                            </motion.span>
                            <motion.span
                                animate={{ translateX: [0, 5, 0] }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    delay: 0.4,
                                }}
                                className="inline-block">
                                .
                            </motion.span>
                        </motion.h1>
                    </div>
                </motion.div>
                <motion.div
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white   "
                    initial={{ scale: 0 }}
                    animate={{ scale: 2 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}>
                    {progress}%
                </motion.div>
            </motion.div>
        </div>
    );
};

export default InitialLoading;
