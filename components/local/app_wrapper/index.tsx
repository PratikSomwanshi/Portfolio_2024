"use client";
import React, { useState, useEffect } from "react";
import InitialLoading from "../initial_loading";
import { AnimatePresence, motion } from "framer-motion";

function AppWrapper({ children }: { children: React.ReactNode }) {
    const [isComplete, setIsComplete] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isComplete) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1495);

            return () => clearTimeout(timer);
        }
    }, [isComplete]);

    return (
        <section className="h-screen w-screen">
            <AnimatePresence>
                {!isComplete && (
                    <InitialLoading setIsComplete={setIsComplete} />
                )}
            </AnimatePresence>
            <div className={`${isLoading ? "hidden" : "inline-block"}`}>
                {children}
            </div>
        </section>
    );
}

export default AppWrapper;
