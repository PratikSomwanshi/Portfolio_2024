import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const InitialLoading = ({
    setIsComplete,
}: {
    setIsComplete: (isComplete: boolean) => void;
}) => {
    const [progress, setProgress] = useState(0);

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
        <motion.div
            className="relative flex items-center h-[94vh] w-[98%] justify-center"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}>
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}>
                <div className="flex items-center justify-center w-full h-full">
                    <h1 className="text-6xl font-bold text-white -translate-y-24 flex">
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
                                    className="inline-block">
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
                    </h1>
                </div>
            </motion.div>
            <motion.div
                className="text-6xl font-bold text-white overflow-hidden"
                initial={{ scale: 0 }}
                animate={{ scale: 2 }}
                transition={{ duration: 1.5, ease: "easeOut" }}>
                {progress}%
            </motion.div>
        </motion.div>
    );
};

export default InitialLoading;
